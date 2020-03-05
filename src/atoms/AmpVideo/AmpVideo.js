import React from 'react';
import PropTypes from 'prop-types';

const AmpVideo = (props) => {
  return (
    <amp-iframe
      src={props.url}
      width={props.width}
      height={props.height}
      layout="responsive"
      frameborder="0"
      sandbox="allow-scripts allow-same-origin allow-popups"
    >
      <amp-img
        placeholder
        src={props.thumbnail_url}
        width={props.thumbnail_width}
        height={props.thumbnail_height}
        layout="fill"
      ></amp-img>
    </amp-iframe>
  );
};

AmpVideo.propTypes = {
  url: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  thumbnail_url: PropTypes.string,
  thumbnail_width: PropTypes.number,
  thumbnail_height: PropTypes.number
};

export default AmpVideo;
