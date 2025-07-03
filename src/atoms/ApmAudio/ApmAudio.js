import React from 'react';
import PropTypes from 'prop-types';

const ApmAudio = (props) => {
  if (props.minimal) {
    return null;
  }
  if (!props?.embedded?.audio) {
    return null;
  }

  const { float, width, title, audio_credit } = props.nodeData.attrs;
  const audio_id = props.nodeData.attrs.id || props.nodeData.attrs.audio_id;
  const audio = props?.embedded?.audio.find((item) => item.id === audio_id);

  if (
    !audio ||
    !audio?.encodings?.length ||
    audio.encodings[0].publish_status === 'unpublished'
  ) {
    return null;
  }

  const src =
    audio.encodings[0]?.locations?.find(
      (item) => item?.location === 'megaphone'
    )?.path || audio.encodings[0]?.play_file_path;

  if (src?.match(/\.m3u/)) {
    return null;
  }

  if (props.isAmp) {
    return (
      <figure className={`figure ${width} align-${float}`}>
        <amp-audio
          width="400"
          height="42"
          src={src?.replace(/(%user_agent|unreplaced_ua)/, 'web')}
          controlsList={audio.downloadable ? undefined : 'nodownload'}
        ></amp-audio>
        <figcaption className="figure_caption">
          <div className="figure_caption_content">{title}</div>
          {audio_credit && (
            <span className="figure_credit">by {audio_credit}</span>
          )}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={`figure ${width} align-${float}`}>
      <audio
        controls="controls"
        controlsList={audio.downloadable ? undefined : 'nodownload'}
        src={src?.replace(/(%user_agent|unreplaced_ua)/, 'web')}
      ></audio>
      <figcaption className="figure_caption">
        <div className="figure_caption_content">{title}</div>
        {audio_credit && (
          <span className="figure_credit">by {audio_credit}</span>
        )}
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
