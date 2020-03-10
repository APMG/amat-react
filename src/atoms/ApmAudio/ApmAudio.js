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

  if (props.isAmp) {
    return (
      <figure className={`figure ${width} align-${float}`}>
        <amp-audio
          width="500"
          height="42"
          src={audio.encodings[0].play_file_path.replace('%user_agent', 'web')}
        ></amp-audio>
        <figcaption className="figure_caption">
          <div className="figure_caption_content">{title}</div>
          <span className="figure_credit">by {audio_credit}</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={`figure ${width} align-${float}`}>
      <audio
        controls="controls"
        src={audio.encodings[0].play_file_path.replace('%user_agent', 'web')}
      ></audio>
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
  minimal: PropTypes.bool,
  isAmp: PropTypes.bool // for AMP html
};

export default ApmAudio;
