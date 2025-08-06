export const injectScript = (node, scrpt, id, callback = null) => {
  if (document.getElementById(id)) return;

  async function delayForPym(scrpt, tag) {
    if (scrpt.innerHTML.includes('pym')) {
      waitMoreForPym(scrpt, tag);
      return;
    }
    tag.innerHTML = scrpt.innerHTML;
  }

  async function waitMoreForPym(scrpt, tag, counter = 0) {
    if (counter > 4) return;
    await sleep(1000);
    if (typeof pym == 'object') {
      tag.innerHTML = scrpt.innerHTML;
    } else {
      counter = counter + 1;
      waitMoreForPym(scrpt, tag, counter);
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let tag = document.createElement('script');
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
    delayForPym(scrpt, tag);
  }
  tag.id = id;
  tag.onload = () => {
    if (callback) callback();
  };
  setTimeout(() => {
    node.appendChild(tag);
  }, 500);
};
