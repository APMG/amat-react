import React from 'react';
import PropTypes from 'prop-types';

const ApmAudio = (props) => {
  if (props.minimal) {
    return null;
  }
  const { float, width, title, audio_credit } = props.nodeData.attrs;
  const audio = props.embedded.audio.find(
    (item) => item.id === props.nodeData.attrs.audio_id
  );

  return (
    <figure className={`figure ${width} align-${float}`}>
      <audio
        controls="controls"
        src={audio.encodings[0].play_file_path.replace('%user_agent', 'web')}
      />
      <figcaption className="figure_caption">
        <div className="figure_caption_content">{title}</div>
        <span className="figure_credit">by {audio_credit}</span>
      </figcaption>
    </figure>
  );
};

ApmAudio.propTypes = {
  nodeData: PropTypes.object,
  embedded: PropTypes.object,
  minimal: PropTypes.bool
};

export default ApmAudio;
