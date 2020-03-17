import React from 'react';
import PropTypes from 'prop-types';

const ApmFootnote = (props) => {
  const {
    attrs: { number }
  } = props.nodeData;
  return (
    <a
      id={`footnote-link-${number}`}
      className="footnote"
      href={`#footnote-content-${number}`}
    >
      {number}
    </a>
  );
};

ApmFootnote.propTypes = {
  nodeData: PropTypes.shape({
    attrs: PropTypes.object,
    content: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string
  })
};

export default ApmFootnote;
