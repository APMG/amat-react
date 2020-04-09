import React from 'react';
import Traverse from '../../utils/Traverse';

const Paragraph = (props) => {
  return <p>{Traverse(props)}</p>;
};

export default Paragraph;
