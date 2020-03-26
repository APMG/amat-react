import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const Mark = (mark, inner, attrs = {}, props) => {
  const Dispatcher = props.components[mark.type];
  return (
    <Dispatcher
      key={uuid()}
      inner={inner}
      {...attrs}
      styleOverrides={props.styleOverrides}
    />
  );
};

Mark.propTypes = {
  components: PropTypes.object,
  styleOverrides: PropTypes.object
};

export default Mark;
