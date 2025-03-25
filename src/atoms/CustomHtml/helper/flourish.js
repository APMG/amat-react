import React from 'react';
export const flourish = (scrpt, nodeData, myRef, state) => {
  window.Flourish = { disable_autoload: true };
  if (myRef.current) {
    myRef.current.innerHTML = nodeData.attrs.html;
  }

  const tag = document.createElement('script');
  tag.src = scrpt.src;
  document.body.append(tag);
  tag.onload = () => {
    if (window.Flourish.loadEmbed) {
      window.Flourish.loadEmbed(myRef.current.firstChild);
      window.FlourishLoaded = null;
    }
  };

  // use state to see if the js is loaded and only return if it is otherwise wait until it's loaded
  return (
    <div
      ref={myRef}
      className="customHtml"
      dangerouslySetInnerHTML={{ __html: state }}
    />
  );
};
