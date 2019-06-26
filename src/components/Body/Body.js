import React from 'react';
import PropTypes from 'prop-types';
import Default from '../../atoms/Default/Default';

const Body = ({ nodeData, embedded, overrides }) => (
  <Default
    nodeData={nodeData}
    embedded={embedded ? embedded : {}}
    overrides={overrides ? overrides : {}}
  />
);

Body.propTypes = {
  nodeData: PropTypes.object,
  embedded: PropTypes.object,
  overrides: PropTypes.object
};

export default Body;
