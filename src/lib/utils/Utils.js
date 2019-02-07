export function singleLineString(str) {
  var newstr = str.replace(/\s{2,}/g, "").replace(/>\s</, "><");
  return newstr;
}
