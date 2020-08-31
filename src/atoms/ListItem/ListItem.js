import React from 'react';
import Traverse from '../../utils/Traverse';

const ListItem = (props) => {
  return <li>{Traverse(props)}</li>;
};

export default ListItem;
