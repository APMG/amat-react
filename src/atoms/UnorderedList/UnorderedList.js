import React from 'react';
import Traverse from '../../utils/Traverse';

const UnorderedList = (props) => {
  return <ul>{Traverse(props)}</ul>;
}

export default UnorderedList;
