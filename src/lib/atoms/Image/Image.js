import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  let aspectedImage =
    props.image.aspect_ratios[props.aspectRatio] ||
    props.image.aspect_ratios[props.image.preferred_aspect_ratio_slug] ||
    null;
  // Is this middle check extraneous? Nate is looking into it, and Drew will too once he gets here.

  let srcSet = '';

  if (aspectedImage === null) {
    srcSet = props.image.srcset;
  } else {
    aspectedImage.instances.forEach((image, i, dataSet) => {
      let set = `${image.url} ${image.width}w`;
      if (i !== dataSet.length - 1) {
        set = set.concat(', \n');
      }

      srcSet = srcSet.concat(set);
    });
  }

  return (
    <img
      className={props.elementClass}
      src={props.image.url}
      alt={props.image.short_caption}
      srcSet={srcSet}
    />
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired,
  aspectRatio: PropTypes.string,
  elementClass: PropTypes.string
};

export default Image;
