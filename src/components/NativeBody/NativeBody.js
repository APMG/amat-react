import React from 'react';
import PropTypes from 'prop-types';
import DefaultComponents from '../../utils/DefaultComponents';
import Traverse from '../../utils/Traverse';

const NativeBody = ({
  nodeData,
  embedded,
  overrides = {}
}) => {
  const components = DefaultComponents();
  const mergedComponents =
    Object.keys(overrides).length > 0
      ? Object.assign(components, overrides)
      : components;

  return (
    <Traverse
      nodeData={nodeData}
      embedded={embedded ? embedded : {}}
      components={mergedComponents}
    />
  );
};

NativeBody.propTypes = {
  nodeData: PropTypes.object.isRequired,
  embedded: PropTypes.object,
  overrides: PropTypes.object
};

export default NativeBody;
