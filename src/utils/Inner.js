import React from 'react';
import Dispatch from './Dispatch';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const Inner = (child, props) => {
  const Dispatcher = Dispatch(child.type);
  switch (child.type) {
    case 'apm_image':
      return (
        <Dispatcher
          key={uuid()}
          embedded={props.embedded}
          overrides={props.overrides}
          image={child.attrs}
          aspectRatio={child.attrs.preferred_aspect_ratio_slug}
        />
      );
    default:
      return (
        <Dispatcher
          key={uuid()}
          nodeData={child}
          embedded={props.embedded}
          overrides={props.overrides}
        />
      );
  }
};

Inner.propTypes = {
  embedded: PropTypes.object,
  overrides: PropTypes.object
};

export default Inner;
