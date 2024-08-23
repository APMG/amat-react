export const injectScript = (node, scrpt, id) => {
  let tag = document.createElement('script');
  // if (document.getElementById(id)) return;
  for (const key in scrpt.dataset) {
    const curKey = key.replace(
      /[A-Z]/g,
      (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase()
    );
    tag.setAttribute(`data-${curKey}`, scrpt.dataset[key]);
  }
  tag.type = 'text/javascript';
  tag.defer = true;

  if (scrpt.src) {
    tag.src = scrpt.src;
  } else {
    tag.innerHTML = scrpt.innerHTML;
  }
  tag.id = id;
  node.appendChild(tag);
};
