import React from 'react';
import PropTypes from 'prop-types';
import { styleFactory } from '../../utils/stylist';

const ApmFootnote = (props) => {
  const {
    attrs: { number }
  } = props.nodeData;
  const styleMap = props.styleOverrides?.apm_footnote;
  return (
    <a
      id={`footnote-link-${number}`}
      className="footnote"
      href={`#footnote-content-${number}`}
      style={styleFactory(styleMap, 'a')}
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
  }),
  styleOverrides: PropTypes.object
};

export default ApmFootnote;
