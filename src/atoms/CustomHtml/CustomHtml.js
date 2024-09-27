import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { htmlStringToElement } from './helper/htmlStringToElement';
import { injectScript } from './helper/injectScript';
import { recaptcha } from './helper/recaptcha';
import { hashCode } from './helper/hashCode';

const CustomHtml = ({ nodeData, minimal }) => {
  const [state, setState] = useState('');
  const myRef = useRef();
  const ANY_SCRIPT = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;

  const dirtyHtml = nodeData.attrs.html;
  const htmlText = htmlStringToElement(dirtyHtml);

  // Remove script tags from the innerHTML and sanitize the rest
  const cleanHtml = htmlText.innerHTML.replace(ANY_SCRIPT, '');
  console.log('🟩🟥🟨AMAT STILL WORKS');

  if (minimal) {
    return null;
  }

  useEffect(() => {
    // Extract all scripts tag from the html
    const scriptsToInject = Array.from(htmlText.querySelectorAll('script'));
    const localScripts = JSON.parse(localStorage.getItem('localScripts')) || [];

    // Inject the script tags into the DOM
    scriptsToInject.forEach((scrpt) => {
      const id = `__id__${hashCode(scrpt.innerHTML)}`;
      const tag = injectScript(document.body, scrpt, id);

      if (localScripts.indexOf(id) === 0) {
        localScripts.push(id);
        localStorage.setItem('localScripts', JSON.stringify(localScripts));
      }
    });
    setState(cleanHtml);
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
