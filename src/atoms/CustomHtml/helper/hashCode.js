export const hashCode = function(s) {
  var hash = 5381,
    i = s.length;

  while (i) {
    hash = (hash * 33) ^ s.charCodeAt(--i);
  }
  return hash >>> 0;
};
