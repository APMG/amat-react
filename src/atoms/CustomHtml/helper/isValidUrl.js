export const isValidUrl = (url) => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z0-9\\-]+\\.)+[a-z]{2,})|' + // domain name
    'localhost|' + // localhost
    '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IP address
    '\\[?[a-f0-9:\\.]+\\]?)' + // IPv6
    '(\\:\\d+)?(\\/[-a-z0-9%_.~+]*)*' + // path
    '(\\?[;&a-z0-9%_.~+=-]*)?' + // query string
      '(\\#[-a-z0-0-]*)?$', // fragment locator
    'i'
  ); // case insensitive
  return !!pattern.test(url);
};
