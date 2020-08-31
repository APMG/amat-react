import React from 'react';
import Traverse from '../../utils/Traverse';

const Doc = (props) => {
  return <>{Traverse(props)}</>;
};

export default Doc;
