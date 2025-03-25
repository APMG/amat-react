import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { htmlStringToElement } from './helper/htmlStringToElement';
import { injectScript } from './helper/injectScript';
import { recaptcha } from './helper/recaptcha';
import { hashCode } from './helper/hashCode';
import { flourish } from './helper/flourish';

const CustomHtml = ({ nodeData, minimal }) => {
  const [state, setState] = useState('');
  const myRef = useRef();
  const ANY_SCRIPT = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;

  const dirtyHtml = nodeData.attrs.html;
  const htmlText = htmlStringToElement(dirtyHtml);
  if (!htmlText.innerHTML) return null;

  // Remove script tags from the innerHTML and sanitize the rest
  const cleanHtml = htmlText.innerHTML.replace(ANY_SCRIPT, '');

  if (minimal) {
    return null;
  }

  useEffect(() => {
    // Extract all scripts tag from the html
    const scriptsToInject = Array.from(htmlText.querySelectorAll('script'));
    const localScripts = JSON.parse(localStorage.getItem('localScripts')) || [];

    setState(cleanHtml);

    // Inject the script tags into the DOM
    scriptsToInject.forEach((scrpt) => {
      if (
        typeof nodeData.attrs.html == 'string' &&
        nodeData.attrs.html.indexOf('flourish-embed') > 0
      ) {
        return flourish(scrpt, nodeData, myRef, state);
      }
      const id = `__id__${hashCode(scrpt.innerHTML)}`;
      injectScript(document.body, scrpt, id);

      if (localScripts.indexOf(id) === 0) {
        localScripts.push(id);
        localStorage.setItem('localScripts', JSON.stringify(localScripts));
      }
    });
  }, [nodeData]);

  // Enable submit button when recaptcha is successful (forms)
  recaptcha(htmlText);

  return (
    <div
      ref={myRef}
      className="customHtml"
      dangerouslySetInnerHTML={{ __html: state }}
    />
  );
};

CustomHtml.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool
};

export default CustomHtml;
