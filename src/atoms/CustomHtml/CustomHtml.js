import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whitelist from '../../utils/whitelist.json';

const CustomHtml = ({ nodeData, minimal }) => {
  const [html, setHtml] = useState('');

  if (minimal) return null;

  useEffect(() => {
    const { html, safeScripts } = parseHtml({
      ...nodeData.attrs,
      whitelist: whitelist.approved
    });
    setHtml(html);

    safeScripts.forEach((script) => {
      let newScript = document.createElement('script');
      if (script.src) newScript.src = script.src;
      if (script.innerHTML) newScript.innerHTML = script.innerHTML;

      newScript.type = script.type;

      document.body.appendChild(newScript);
    });
  }, []);

  const markup = { __html: html };

  return <div className="customHtml" dangerouslySetInnerHTML={markup} />;
};

CustomHtml.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool
};

export default CustomHtml;

/**
 * Removes all scripts with an external source from the html and returns the whitelisted ones as an array of Nodes
 * @param {html: string, fallback_url: string, whitelist: Array}
 * @returns {html: string, safeScripts: Node[]}
 */
function parseHtml({ html, fallback_url, whitelist }) {
  const whitelistRegex = new RegExp(whitelist.join('|'));
  const element = htmlStringToElement(html);
  let safeHtml, scripts, safeScripts, hasIframe;

  if (!element) return { html: '', safeScripts: [] };

  scripts = Array.from(element.querySelectorAll('script[src]'));
  scripts.forEach((script) => {
    element.removeChild(script);
  });
  safeScripts = scripts.filter((script) => whitelistRegex.test(script.src));
  safeHtml = element.innerHTML;
  hasIframe = element.querySelector('iframe');

  // If there is a script without a src, set the whole block in an iframe (or it might not work!)
  if (element.querySelector('script') && !hasIframe) {
    let src = whitelistRegex.test(fallback_url) ? fallback_url : ''; // if fallback_url does not pass test, this likely will show nothing
    safeHtml = `<iframe width="100%" height="500px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="${src}">${element.innerHTML}</iframe>`;
  }
  return { html: safeHtml, safeScripts };
}

function htmlStringToElement(html) {
  if (typeof document == 'undefined') return false;
  let template = document.createElement('div');
  template.innerHTML = html;
  return template;
}
