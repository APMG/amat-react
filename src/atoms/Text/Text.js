import React from 'react';
import PropTypes from 'prop-types';
import EscapeSpecialCharacters from '../../utils/EscapeSpecialCharacters';

const Text = (props) => {
  const txt = EscapeSpecialCharacters(props.nodeData['text']);
  return <>{txt}</>;
};

Text.propTypes = {
  nodeData: PropTypes.object
};

export default Text;
