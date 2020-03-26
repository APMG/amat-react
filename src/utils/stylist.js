export const styleFactory = (styleMap, el, className) => {
  let key;
  if (el && className) {
    key = `${el}.${className}`;
  } else if (el && !className) {
    key = el;
  } else {
    key = className;
  }

  if (typeof styleMap === 'object') return styleMap[key];
};
