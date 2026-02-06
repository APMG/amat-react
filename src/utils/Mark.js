import React from 'react';
import PropTypes from 'prop-types';
import generateKey from './generateKey';

const Mark = (mark, InnerComponent, attrs = {}, props, index) => {
  const Dispatcher = props.components[mark.type];
  return <Dispatcher key={generateKey(mark, index)} inner={InnerComponent} {...attrs} />;
};

Mark.propTypes = {
  components: PropTypes.object
};

export default Mark;
