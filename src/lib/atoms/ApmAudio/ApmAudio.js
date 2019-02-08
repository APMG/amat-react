import React from "react";

class ApmAudio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      float,
      width,
      title,
      audio_credit,
      url
    } = this.props.nodeData.attrs;
    return (
      <figure className={`figure ${width} align-${float}`}>
        <audio controls="controls" src={url} />
        <figcaption className="figure_caption">
          <div className="figure_caption_content">{title}</div>
          <span className="figure_credit">by {audio_credit}</span>
        </figcaption>
      </figure>
    );
  }
}

export default ApmAudio;
