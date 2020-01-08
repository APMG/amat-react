import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const Aside = (props) => {
  return <aside>{Traverse(props)}</aside>;
};

ApmAside.propTypes = {
  nodeData: PropTypes.object
};

export default Aside;
