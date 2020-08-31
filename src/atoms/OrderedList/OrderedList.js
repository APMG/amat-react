import React from 'react';
import Traverse from '../../utils/Traverse';

const OrderedList = (props) => {
  return <ol>{Traverse(props)}</ol>;
};

export default OrderedList;
