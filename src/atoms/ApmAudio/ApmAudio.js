import React from 'react';
import PropTypes from 'prop-types';
import { styleFactory } from '../../utils/stylist';

const ApmAudio = (props) => {
  if (props.minimal) {
    return null;
  }
  const styleMap = props.styleOverrides?.apm_audio;
  const { float, width, title, audio_credit } = props.nodeData.attrs;
  const audio = props.embedded.audio.find(
    (item) => item.id === props.nodeData.attrs.audio_id
  );

  if (props.isAmp) {
    return (
      <figure
        className={`figure ${width} align-${float}`}
        style={styleFactory(styleMap, 'figure')}
      >
        <amp-audio
          width="400"
          height="42"
          src={audio.encodings[0].play_file_path.replace('%user_agent', 'web')}
          style={styleFactory(styleMap, 'amp-audio')}
        ></amp-audio>
        <figcaption
          className="figure_caption"
          style={styleFactory(styleMap, 'figcaption')}
        >
          <div
            className="figure_caption_content"
            style={styleFactory(styleMap, 'div')}
          >
            {title}
          </div>
          <span
            className="figure_credit"
            style={styleFactory(styleMap, 'span')}
          >
            by {audio_credit}
          </span>
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
  isAmp: PropTypes.bool,
  styleOverrides: PropTypes.object
};

export default ApmAudio;
