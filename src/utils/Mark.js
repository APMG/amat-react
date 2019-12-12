import React from 'react';
import PropTypes from 'prop-types';
import Dispatch from './Dispatch';
import uuid from 'uuid';

const Mark = (mark, inner, attrs = {}, props) => {
  const Dispatcher = Dispatch(mark.type, props.overrides);
  return <Dispatcher key={uuid()} inner={inner} {...attrs} />;
};

Mark.propTypes = {
  overrides: PropTypes.object
};

export default Mark;
