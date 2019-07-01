import React from 'react';
import PropTypes from 'prop-types';

const Em = (props) => {
  return <em>{props.inner}</em>;
};

Em.propTypes = {
  inner: PropTypes.object
};

export default Em;
