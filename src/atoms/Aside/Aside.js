import React from 'react';
import Traverse from '../../utils/Traverse';

const Aside = (props) => {
  return <aside>{Traverse(props)}</aside>;
};

export default Aside;
