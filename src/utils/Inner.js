import React from 'react';
import Dispatch from './Dispatch';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const Inner = (child, props) => {
  const Dispatcher = Dispatch(child.type, props.overrides);
  switch (child.type) {
    case 'apm_image':
      return (
        <Dispatcher
          key={uuid()}
          embedded={props.embedded}
          image={child.attrs}
          aspectRatio={child.attrs.preferred_aspect_ratio_slug}
          minimal={props.minimal}
          overrides={props.overrides}
        />
      );
    default:
      return (
        <Dispatcher
          key={uuid()}
          nodeData={child}
          embedded={props.embedded}
          minimal={props.minimal}
          overrides={props.overrides}
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
