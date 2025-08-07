import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { htmlStringToElement } from './helper/htmlStringToElement';
import { injectScript } from './helper/injectScript';
import { recaptcha } from './helper/recaptcha';
import { hashCode } from './helper/hashCode';
import { flourish } from './helper/flourish';
import usePopulistEmbed from '../../hooks/usePopulist';

const CustomHtml = ({ nodeData, minimal }) => {
  const [state, setState] = useState('');
  const [isPopulistScriptLoaded, setIsPopulistScriptLoaded] = useState(false);
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
  const populistEmbedId = dirtyHtml.match(/data-embed-id="([^"]*)"/)?.[1];

  // Pass the script's loading status to the hook
  usePopulistEmbed(myRef.current, populistEmbedId, isPopulistScriptLoaded);

  useEffect(() => {
    // Extract all scripts tag from the html
    const scriptsToInject = Array.from(htmlText.querySelectorAll('script'));

    setState(cleanHtml);

    // Inject the script tags into the DOM
    scriptsToInject.forEach((scrpt) => {
      const isPopulist = scrpt.src?.includes('populist.us');
      const isFlourish = dirtyHtml.indexOf('flourish-embed') > 0;

      if (!isPopulist && !isFlourish) {
        const id = `__id__${hashCode(scrpt.innerHTML)}`;
        injectScript(document.body, scrpt, id);
      }
      if (dirtyHtml.indexOf('flourish-embed') > 0) {
        const flourishScript = scriptsToInject.find((s) =>
          s.src?.includes('flourish.studio')
        );
        if (flourishScript)
          flourish(flourishScript, nodeData, myRef, cleanHtml);
      }

      const populistScript = scriptsToInject.find((s) =>
        s.src?.includes('populist.us')
      );
      if (populistScript) {
        const pid = `__pid__${populistScript.getAttribute('data-embed-id')}`;
        injectScript(document.head, populistScript, pid, () => {
          setIsPopulistScriptLoaded(true);
        });
      }
    });
  }, [dirtyHtml, htmlText, myRef]);

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
