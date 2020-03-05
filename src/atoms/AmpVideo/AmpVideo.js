import React from 'react';
import PropTypes from 'prop-types';

const AmpVideo = (props) => {
  function extractSrc(html) {
    let match = /src="([^"]+)/.exec(html);
    if (match.length === 2) return match[1];
  }

  return (
    <amp-iframe
      src={extractSrc(props.html)}
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
  html: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  thumbnail_url: PropTypes.string,
  thumbnail_width: PropTypes.number,
  thumbnail_height: PropTypes.number
};

export default AmpVideo;
