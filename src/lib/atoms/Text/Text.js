import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => {
  const txt = props.nodeData['text'].replace(/\B /g, '\u00a0');
  return <>{txt}</>;
};

Text.propTypes = {
  nodeData: PropTypes.object
};

export default Text;
