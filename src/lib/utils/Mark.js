import React from 'react';
import Dispatch from './Dispatch';
import uuid from 'uuid';

const Mark = (mark, inner, attrs = {}) => {
  const Dispatcher = Dispatch(mark.type);
  return <Dispatcher key={uuid()} inner={inner} {...attrs} />;
};

export default Mark;
