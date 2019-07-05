import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ApmVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  findEmbedded() {
    return this.props.embedded.oembeds.find((embed) => {
      return embed.url === this.props.nodeData.attrs.url;
    });
  }

  markup(rawMarkup) {
    return { __html: rawMarkup };
  }

  render() {
    const { long_caption, credit, credit_url } = this.props.nodeData.attrs;
    const embed = this.findEmbedded();
    const cname = embed.provider_name.toLowerCase().replace(/\s/g, '');
    const classes = classNames({
      'apm-video': true,
      [cname]: cname
    });
    if (this.props.minimal) {
      return null;
    }
    return (
      <figure
        className="figure"
        data-node-type="apm-video"
        data-url="https://www.youtube.com/watch?v=OIf7d60lOR0"
      >
        <div
          className={classes}
          dangerouslySetInnerHTML={this.markup(embed.html)}
        />
        <figcaption className="figure_caption">
          <span className="figure_credit">
            <a href={credit_url}>{credit}</a>
          </span>
          <div className="figure_caption_content">{long_caption}</div>
        </figcaption>
      </figure>
    );
  }
}

ApmVideo.propTypes = {
  nodeData: PropTypes.object,
  embedded: PropTypes.object,
  minimal: PropTypes.bool
};

export default ApmVideo;
