const ANY_SCRIPT = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;

const injectScript = (node, scrpt) => {
  let tag = document.createElement('script');
  tag.type = 'text/javascript';
  tag.defer = true;

  if (scrpt.src) {
    tag.src = scrpt.src;
  } else {
    tag.innerHTML = scrpt.innerHTML;
  }
  node.appendChild(tag);
};

const htmlStringToElement = (html) => {
  if (typeof document == 'undefined') return false;
  let template = document.createElement('div');
  template.innerHTML = html;
  return template;
};

export { ANY_SCRIPT, injectScript, htmlStringToElement };
