import React from 'react';
import Traverse from '../../utils/Traverse';

const Blockquote = (props) => {
  return <blockquote>{Traverse(props)}</blockquote>;
};

export default Blockquote;
