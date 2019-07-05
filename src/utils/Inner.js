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
          minimal={props.minimal}
        />
      );
    default:
      return (
        <Dispatcher
          key={uuid()}
          nodeData={child}
          embedded={props.embedded}
          overrides={props.overrides}
          minimal={props.minimal}
        />
      );
  }
};

Inner.propTypes = {
  embedded: PropTypes.object,
  overrides: PropTypes.object,
  minimal: PropTypes.bool
};

export default Inner;
