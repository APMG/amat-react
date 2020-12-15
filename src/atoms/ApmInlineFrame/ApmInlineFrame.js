import React from 'react';

const ApmInlineFrame = (props) => {
  let attrs = props.nodeData.attrs
  return <iframe
          className={`apm-inline-frame`}
          frameBorder="0"
          height={`${attrs.height}`}
          src={`${attrs.src}`}
          title={`${attrs.description}`}
          width={`${attrs.width}`}></iframe>;
};

export default ApmInlineFrame;
