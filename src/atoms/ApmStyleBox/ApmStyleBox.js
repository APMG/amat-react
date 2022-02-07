import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const ApmStyleBox = (props) => {
  const { custom_class } = props.nodeData.attrs;
  return (
    <div
      className={`apm-style-box ${custom_class}`}
      data-custom-class={custom_class}
    >
      {Traverse(props)}
    </div>
  );
};

ApmStyleBox.propTypes = {
  nodeData: PropTypes.object
};

export default ApmStyleBox;
