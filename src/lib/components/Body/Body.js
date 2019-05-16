import React from 'react';
import PropTypes from 'prop-types';
import Default from '../../atoms/Default/Default';

const Body = (props) => {
  return (
    <Default
      nodeData={props.nodeData}
      embedded={props.embedded ? props.embedded : {}}
      overrides={props.overrides ? props.overrides : {}}
    />
  );
};

Body.propTypes = {
  nodeData: PropTypes.object,
  embedded: PropTypes.object,
  overrides: PropTypes.object
};

export default Body;
