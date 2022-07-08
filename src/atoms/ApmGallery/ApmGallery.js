import React from 'react';
import PropTypes from 'prop-types';
import { Slideshow } from '@apmg/enceladus';

const ApmGallery = (props) => {
  if (!props.nodeData.content || props.minimal) {
    return null;
  }
  let images = [];
  props.nodeData.content.forEach((slide) => {
    images.push(slide.attrs);
  });

  return (
    <div className="apm-gallery">
      <div className="apm-gallery_title">{props.nodeData.attrs.title}</div>
      <div className="apm-gallery_slides">
        <Slideshow
          images={images}
          animation="slide"
          isAmp={props.isAmp ? props.isAmp : false}
          mobileAr={props.mobileAr}
          media={props.media}
        />
      </div>
    </div>
  );
};

ApmGallery.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool,
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

export default ApmGallery;
