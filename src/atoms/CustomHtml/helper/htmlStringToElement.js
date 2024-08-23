export const htmlStringToElement = (html) => {
  if (typeof document == 'undefined') return false;
  let template = document.createElement('div');
  template.innerHTML = html;
  return template;
};
