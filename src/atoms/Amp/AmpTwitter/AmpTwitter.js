import React from 'react';
import PropTypes from 'prop-types';

const AmpTwitter = (props) => {
  const defaultWidth = 550;
  const defaultHeight = 550;
  const tweetIdMatch = props.embed.url.match(/(\d+)(?:$|\?)/);
  if (!tweetIdMatch || props.minimal) return null;

  return (
    <amp-twitter
      data-tweetid={tweetIdMatch[1]}
      layout="responsive"
      height={props.embed.height || defaultHeight}
      width={props.embed.width || defaultWidth}
    />
  );
};

AmpTwitter.propTypes = {
  embed: PropTypes.object,
  minimal: PropTypes.bool
};

export default AmpTwitter;
