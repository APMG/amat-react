import React from 'react';
import PropTypes from 'prop-types';

const Code = (props) => {
  return <code>{props.inner}</code>;
};

Code.propTypes = {
  inner: PropTypes.object
};

export default Code;
