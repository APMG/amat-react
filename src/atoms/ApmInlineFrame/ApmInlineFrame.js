import React from 'react';

const ApmInlineFrame = (props) => {
  let attrs = props.nodeData.attrs;

  if (props.isAmp) {
    return (
      <amp-iframe
        frameBorder="0"
        height={`${attrs.height}`}
        src={`${attrs.src}`}
        title={`${attrs.description}`}
        width={`${attrs.width}`}
      ></amp-iframe>
    );
  } else
    return (
      <iframe
        className={`apm-inline-frame`}
        frameBorder="0"
        height={`${attrs.height}`}
        src={`${attrs.src}`}
        title={`${attrs.description}`}
        width={`${attrs.width}`}
      ></iframe>
    );
};

export default ApmInlineFrame;
