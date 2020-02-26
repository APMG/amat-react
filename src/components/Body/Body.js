import React from 'react';
import PropTypes from 'prop-types';
import Default from '../../atoms/Default/Default';
import DefaultComponents from '../../utils/DefaultComponents';

const Body = ({ nodeData, embedded, overrides = {}, minimal = false }) => {
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
      minimal={minimal}
    />
  );
};

Body.propTypes = {
  nodeData: PropTypes.object,
  embedded: PropTypes.object,
  overrides: PropTypes.object,
  minimal: PropTypes.bool
};

export default Body;
