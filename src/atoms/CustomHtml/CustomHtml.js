import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ANY_SCRIPT = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;

/**
 * Create & inject a new <script> tag into the page.
 *
 * @param {String} src A script URL.
 * @returns {HTMLElement} The injected script tag.
 */

const injectScriptTag = (scrpt, node) => {
  node.appendChild(scrpt);
  return scrpt;
};

const htmlStringToElement = (html) => {
  if (typeof document == 'undefined') return false;
  let template = document.createElement('div');
  template.innerHTML = html;
  return template;
};

const CustomHtml = (props) => {
  if (props.minimal || props.isAmp) {
    return null;
  }
  const [html, setHtml] = useState('');
  const myRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line
    const current = ReactDOM.findDOMNode(myRef.current);
    const dirtyHtml = props.nodeData.attrs.html;
    const cleanHtml = dirtyHtml.replace(ANY_SCRIPT, '');
    const ele = htmlStringToElement(dirtyHtml);
    const scripts = Array.from(ele.querySelectorAll('script'));
    const node =
      process.env.JEST_WORKER_ID !== undefined ? current : document.head;
    if (scripts) {
      scripts
        .map((scrpt) => {
          return injectScriptTag(scrpt, node);
        })
        .filter(Boolean);
    }
    setHtml(cleanHtml);
  });
  const markup = { __html: html };
  return (
    <div ref={myRef} className="customHtml" dangerouslySetInnerHTML={markup} />
  );
};

CustomHtml.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool,
  isAmp: PropTypes.bool
};

export default CustomHtml;
