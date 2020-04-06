import React from 'react';
import PropTypes from 'prop-types';
import EscapeSpecialCharaters from '../../utils/EscapeSpecialCharaters';

const Text = (props) => {
  const txt = EscapeSpecialCharaters(props.nodeData['text']);
  return <>{txt}</>;
};

Text.propTypes = {
  nodeData: PropTypes.object
};

export default Text;
