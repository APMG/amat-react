import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const Inner = (child, props) => {
  const Dispatcher = props.components[child.type];

  if (!Dispatcher) {
    console.error(
      `[AMAT] Component not found for type: "${child.type}". Available components:`,
      Object.keys(props.components)
    );
    return null;
  }

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
          mobileAr={props.mobileAr}
          media={props.media}
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
          isAmp={props.isAmp}
          mobileAr={props.mobileAr}
          media={props.media}
        />
      );
  }
};

Inner.propTypes = {
  embedded: PropTypes.object,
  minimal: PropTypes.bool,
  components: PropTypes.object,
  isAmp: PropTypes.bool,
  mobileAr: PropTypes.oneOf([
    'normal',
    'uncropped',
    'square',
    'widescreen',
    'portrait',
    'thumbnail'
  ]),
  media: PropTypes.arrayOf(PropTypes.string)
};

export default Inner;
