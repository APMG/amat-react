import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const Mark = (mark, InnerComponent, attrs = {}, props) => {
  const Dispatcher = props.components[mark.type];
  console.log('Mark Dispatcher', Dispatcher);

  return <Dispatcher key={uuid()} inner={InnerComponent} {...attrs} />;
};

Mark.propTypes = {
  components: PropTypes.object
};

export default Mark;
