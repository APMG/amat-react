export default function EscapeSpecialCharaters(text) {
  // React will automatically escape ampersands and less than and greater than signs  but not quotes and double quotes.
  // See https://shripadk.github.io/react/docs/jsx-gotchas.html which for some reason is no longer on the main react site
  // # https://github.com/facebook/react/issues/8998
  const retText = text
    .replace(/'/g, String.fromCharCode(39))
    .replace(/"/g, String.fromCharCode(34));
  return retText;
}
