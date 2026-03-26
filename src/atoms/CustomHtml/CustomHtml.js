import React, { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { htmlStringToElement } from './helper/htmlStringToElement';
import { injectScript } from './helper/injectScript';
import { recaptcha } from './helper/recaptcha';
import { hashCode } from './helper/hashCode';
import { flourish } from './helper/flourish';
import usePopulistEmbed from '../../hooks/usePopulist';

const CustomHtml = ({ nodeData, minimal }) => {
  const myRef = useRef();
  const ANY_SCRIPT = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
  const [isPopulistScriptLoaded, setIsPopulistScriptLoaded] = useState(false);

  const dirtyHtml = nodeData.attrs.html;

  // Use useMemo to ensure consistent results between server and client
  const cleanHtml = useMemo(() => {
    // Simple regex-based cleaning that works the same on server and client
    return dirtyHtml.replace(ANY_SCRIPT, '');
  }, [dirtyHtml]);

  if (minimal || !dirtyHtml) {
    return null;
  }

  const populistEmbedId = dirtyHtml.match(/data-embed-id="([^"]*)"/)?.[1];

  // Pass the script's loading status to the hook
  usePopulistEmbed(myRef.current, populistEmbedId, isPopulistScriptLoaded);

  useEffect(() => {
    // This runs only on the client
    const htmlText = htmlStringToElement(dirtyHtml);
    if (!htmlText) return;

    // Extract all scripts tag from the html
    const scriptsToInject = Array.from(htmlText.querySelectorAll('script'));

    // Inject the script tags into the DOM
    scriptsToInject.forEach((scrpt) => {
      const isPopulist = scrpt.src?.includes('populist.us');
      const isFlourish = dirtyHtml.indexOf('flourish-embed') > 0;

      if (!isPopulist && !isFlourish) {
        const id = `__id__${hashCode(scrpt.innerHTML)}`;
        injectScript(document.body, scrpt, id);
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

    // Enable submit button when recaptcha is successful (forms)
    recaptcha(htmlText);
  }, [dirtyHtml]);

  // Separate effect for Flourish to ensure it runs after the DOM has updated
  useEffect(() => {
    if (cleanHtml.indexOf('flourish-embed') > 0) {
      const htmlText = htmlStringToElement(dirtyHtml);
      if (!htmlText) return;

      const scriptsToInject = Array.from(htmlText.querySelectorAll('script'));
      const flourishScript = scriptsToInject.find((s) =>
        s.src?.includes('flourish.studio')
      );
      if (flourishScript) {
        flourish(flourishScript, nodeData, myRef, cleanHtml);
      }
    }
  }, [dirtyHtml, cleanHtml, nodeData]);

  return (
    <div
      ref={myRef}
      className="customHtml"
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
      suppressHydrationWarning
    />
  );
};

CustomHtml.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool
};

export default CustomHtml;
