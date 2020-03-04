import React from 'react';
import PropTypes from 'prop-types';

const AmpVideo = (props) => {
  return (
    <amp-video-iframe
      src={props.url}
      width={props.width}
      height={props.height}
      layout="responsive"
    >
      <amp-img placeholder src={props.thumbnail_url}></amp-img>
    </amp-video-iframe>
  );
};

AmpVideo.propTypes = {
  url: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  thumbnail_url: PropTypes.string
};

export default AmpVideo;
