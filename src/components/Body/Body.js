import React from 'react';
import PropTypes from 'prop-types';
import Default from '../../atoms/Default/Default';

const Body = ({ nodeData, embedded, overrides, minimal = false }) => {
  return (
    <Default
      nodeData={nodeData}
      embedded={embedded ? embedded : {}}
      overrides={overrides ? overrides : {}}
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
