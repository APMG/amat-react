import React from 'react';
import PropTypes from 'prop-types';

const Strong = (props) => {
  return <strong>{props.inner}</strong>;
};

Strong.propTypes = {
  inner: PropTypes.object
};

export default Strong;
