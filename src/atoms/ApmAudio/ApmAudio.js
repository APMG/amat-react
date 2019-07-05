import React from 'react';
import PropTypes from 'prop-types';

const ApmAudio = (props) => {
  if (props.minimal) {
    return null;
  }
  const { float, width, title, audio_credit, url } = props.nodeData.attrs;

  return (
    <figure className={`figure ${width} align-${float}`}>
      <audio controls="controls" src={url} />
      <figcaption className="figure_caption">
        <div className="figure_caption_content">{title}</div>
        <span className="figure_credit">by {audio_credit}</span>
      </figcaption>
    </figure>
  );
};

ApmAudio.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool
};

export default ApmAudio;
