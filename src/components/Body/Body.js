import React from 'react';
import PropTypes from 'prop-types';
import Default from '../../atoms/Default/Default';

const Body = ({
  nodeData,
  embedded,
  overrides,
  minimal = false,
  isAmp = false
}) => {
  return (
    <Default
      nodeData={nodeData}
      embedded={embedded ? embedded : {}}
      overrides={overrides ? overrides : {}}
      minimal={minimal}
      isAmp={isAmp}
    />
  );
};

Body.propTypes = {
  nodeData: PropTypes.object.isRequired,
  embedded: PropTypes.object,
  overrides: PropTypes.object,
  minimal: PropTypes.bool,
  isAmp: PropTypes.bool
};

export default Body;
