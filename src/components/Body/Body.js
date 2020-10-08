import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';
import DefaultComponents from '../../utils/DefaultComponents';

const Body = ({
  nodeData,
  embedded,
  overrides = {},
  minimal = false,
  isAmp = false
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
      minimal={minimal}
      isAmp={isAmp}
    />
  );
};

Body.propTypes = {
  nodeData: PropTypes.object,
  embedded: PropTypes.object,
  overrides: PropTypes.object,
  minimal: PropTypes.bool,
  isAmp: PropTypes.bool
};

export default Body;
