import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { isValidUrl } from './helper/isValidUrl';
import { htmlStringToElement } from './helper/htmlStringToElement';
import { injectScript } from './helper/injectScript';
import { recaptcha } from './helper/recaptcha';
import { hashCode } from './helper/hashCode';

const CustomHtml = ({ nodeData, minimal }) => {
  const [state, setState] = useState('');
  const myRef = useRef();
  const ANY_SCRIPT = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
  let hasIframe;

  const dirtyHtml = nodeData.attrs.html;
  const ele = htmlStringToElement(dirtyHtml);

  if (minimal) {
    return null;
  }

  if (ele) {
    hasIframe = ele.querySelector('iframe');
  }

  useEffect(() => {
    const scriptsToInject = Array.from(ele.querySelectorAll('script'));
    const localScripts = JSON.parse(localStorage.getItem('localScripts')) || [];
    scriptsToInject.forEach((scrpt) => {
      const id = `__id__${hashCode(scrpt.innerHTML)}`;
      injectScript(document.body, scrpt, id);
      if (localScripts.indexOf(id) === -1) {
        localScripts.push(id);
        localStorage.setItem('localScripts', JSON.stringify(localScripts));
      }
    });

    setState(ele.innerHTML.replace(ANY_SCRIPT, ''));

    if (
      ele.querySelector('script') &&
      !hasIframe &&
      !ele.querySelector('form')
    ) {
      let src, sourceType;

      if (
        ele.querySelector('blockquote') &&
        ele.querySelector('.tiktok-embed')
      ) {
        sourceType = 'tiktok';
      } else if (ele.querySelector('.typeform-widget')) {
        sourceType = 'typeformWidget';
      } else if (nodeData.attrs.fallback_url) {
        sourceType = 'fallbackUrl';
      } else if (ele.querySelector('script').src) {
        sourceType = 'scriptSrc';
      }

      switch (sourceType) {
        case 'scriptSrc':
          src = ele.querySelector('script').src;

          break;
        case 'fallbackUrl':
          if (isValidUrl(nodeData.attrs.fallback_url)) {
            src = nodeData.attrs.fallback_url;
          }
          break;
        case 'typeformWidget':
          const div = ele.querySelector('.typeform-widget');
          if (div && div.getAttribute('data-url')) {
            src = div.getAttribute('data-url');
          }
          break;
        case 'tiktok':
          return setState(ele.innerHTML);

        default:
          // about:blank as a fallback for the src attribute in an iframe is a common practice when there's no specific URL to load.
          // It creates an empty iframe with no content.
          src = 'about:blank';
      }

      setState(
        `<iframe width="100%" height="500px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="${src}">${ele.innerHTML}</iframe>`
      );
    }
  }, [nodeData]);

  // Enable submit button when recaptcha is successful (forms)
  recaptcha(ele);

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
  minimal: PropTypes.bool,
  isAmp: PropTypes.bool
};

export default CustomHtml;
