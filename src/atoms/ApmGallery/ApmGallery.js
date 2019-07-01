import React from 'react';
import PropTypes from 'prop-types';
import { Slideshow } from '@apmg/enceladus';

const ApmGallery = (props) => {
  let images = [];
  props.nodeData.content.forEach((slide) => {
    images.push(slide.attrs);
  });

  return (
    <div className="apm-gallery">
      <div className="apm-gallery_title">{props.nodeData.attrs.title}</div>
      <div className="apm-gallery_slides">
        <Slideshow images={images} animation="slide" />
      </div>
    </div>
  );
};

ApmGallery.propTypes = {
  nodeData: PropTypes.object
};

export default ApmGallery;
