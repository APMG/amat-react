import React from 'react';
import PropTypes from 'prop-types';

const AmpInstagram = ({ embed, minimal }) => {
  const defaultWidth = 550;
  const defaultHeight = 550;
  const shortcode = embed?.url?.match(/com\/p\/([^/]+)/);

  if (!shortcode || minimal) {
    return null;
  }

  return (
    <amp-instagram
      data-shortcode={shortcode[1]}
      data-captioned
      layout="responsive"
      width={embed.thumbnail_width || defaultWidth}
      height={embed.thumbnail_height || defaultHeight}
    />
  );
};

AmpInstagram.propTypes = {
  embed: PropTypes.object,
  minimal: PropTypes.bool
};

export default AmpInstagram;
