import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const Inner = (child, props) => {
  const Dispatcher = props.components[child.type];
  switch (child.type) {
    case 'apm_image':
      return (
        <Dispatcher
          key={uuid()}
          embedded={props.embedded}
          image={child.attrs}
          aspectRatio={child.attrs.preferred_aspect_ratio_slug}
          minimal={props.minimal}
          components={props.components}
          isAmp={props.isAmp}
        />
      );
    default:
      return (
        <Dispatcher
          key={uuid()}
          nodeData={child}
          embedded={props.embedded}
          minimal={props.minimal}
          components={props.components}
          isAmpl={props.isAmp}
        />
      );
  }
};

Inner.propTypes = {
  embedded: PropTypes.object,
  minimal: PropTypes.bool,
  components: PropTypes.object,
  isAmp: PropTypes.bool
};

export default Inner;
