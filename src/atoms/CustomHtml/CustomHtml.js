import React from 'react';
import PropTypes from 'prop-types';

const ANY_SCRIPT = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
const EXTERNAL_SCRIPT = /<script[^>]+src=(['"])(.*?)\1/i;
const INJECTED_SCRIPT = /<script[\s\S]*?>[\s\S]*?createElement[\s\S]*?src\s?=\s?(['"])(.*?)\1/i;

/**
 * Find the URI for the external file loaded from a script tag.
 *
 * @param {String} script The string HTML of a <script> tag.
 * @returns {String|null} The URI of the requested external script, otherwise null.
 */
const extractExternalScriptURL = (script) => {
  const match = script.match(EXTERNAL_SCRIPT);
  // Return null if no match, otherwise return the second capture group.
  return match && match[2];
};

/**
 * Find the URI for a script being injected from inline JS.
 *
 * @param {String} script The string HTML of a <script> tag.
 * @returns {String|null} The URI of a script being injected from inline JS, otherwise null.
 */
const extractInjectedScriptURL = (script) => {
  const match = script.match(INJECTED_SCRIPT);
  // Return null if no match, otherwise return the second capture group.
  return match && match[2];
};

/**
 * Match either external or inline-script-injected script tag source URIs.
 *
 * @param {String} script The string HTML of a <script> tag
 * @returns {String|null} The URI of the script file this script tag loads, or null.
 */
const extractScriptURL = (script) =>
  extractExternalScriptURL(script) || extractInjectedScriptURL(script);

/**
 * Remove duplicate or undefined values from an array of strings.
 *
 * @param {String[]} Array script file URIs.
 */
const uniqueURIs = (scripts) =>
  Object.keys(
    scripts.reduce(
      (keys, script) => (script ? { ...keys, [script]: true } : keys),
      {}
    )
  );

/**
 * Parse a string of HTML and identify the JS files loaded by any contained script tags.
 *
 * @param {String} string String containing HTML markup which may include script tags.
 * @returns {String[]} Array of any script URIs we believe to be loaded in this HTML.
 */
const getScripts = (string) => {
  const scripts = string.match(ANY_SCRIPT);
  return scripts ? uniqueURIs(scripts.map(extractScriptURL)) : [];
};

/**
 * Create & inject a new <script> tag into the page.
 *
 * @param {String} src A script URL.
 * @returns {HTMLElement} The injected script tag.
 */
const injectScriptTag = (src) => {
  const scriptTag = document.createElement('script');
  scriptTag.src = src;
  document.head.appendChild(scriptTag);
  return scriptTag;
};

const CustomHtml = (props) => {
  if (props.minimal || props.isAmp) {
    return null;
  }

  const myRef = React.createRef();
  getScripts(props.nodeData.attrs.html)
    .map((scrpt) => injectScriptTag(scrpt))
    .filter(Boolean);
  const html = props.nodeData.attrs.html.replace(ANY_SCRIPT, '');
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
