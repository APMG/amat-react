export function singleLineString(str) {
  var newstr = str.replace(/\s{2,}/g, '').replace(/>\s</, '><');
  return newstr;
}

export function youtubeParser(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}
