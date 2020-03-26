import React from 'react';
import PropTypes from 'prop-types';
import Default from '../../atoms/Default/Default';
import DefaultComponents from '../../utils/DefaultComponents';

const Body = ({
  nodeData,
  embedded,
  overrides = {},
  styleOverrides = {},
  minimal = false,
  isAmp = false
}) => {
  const components = DefaultComponents();
  const mergedComponents =
    Object.keys(overrides).length > 0
      ? Object.assign(components, overrides)
      : components;

  return (
    <Default
      nodeData={nodeData}
      embedded={embedded ? embedded : {}}
      components={mergedComponents}
      styleOverrides={styleOverrides}
      minimal={minimal}
      isAmp={isAmp}
    />
  );
};

Body.propTypes = {
  nodeData: PropTypes.object.isRequired,
  embedded: PropTypes.object,
  overrides: PropTypes.object,
  styleOverrides: PropTypes.object,
  minimal: PropTypes.bool,
  isAmp: PropTypes.bool
};

export default Body;
