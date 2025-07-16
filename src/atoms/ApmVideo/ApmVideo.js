import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AmpVideo from './AmpVideo';

class ApmVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  findEmbedded() {
    if (!this.props?.embedded?.oembeds) {
      return null;
    }
    return this.props.embedded.oembeds.find((embed) => {
      return embed.url === this.props.nodeData.attrs.url;
    });
  }

  markup(rawMarkup) {
    let __html = rawMarkup;
    return { __html };
  }

  render() {
    const {
      short_caption,
      long_caption,
      credit_name,
      credit_url
    } = this.props.nodeData.attrs;
    if (this.props.minimal) {
      return null;
    }
    const embed = this.findEmbedded();
    if (!embed) {
      console.error(`No embed found for ${this.props.nodeData.attrs.url}`);
      return null;
    }

    if (embed && this.props.isAmp) {
      return <AmpVideo {...embed} />;
    }
    const cname = embed?.provider_name.toLowerCase().replace(/\s/g, '');
    const classes = classNames({
      'apm-video': true,
      [cname]: cname
    });

    return (
      <figure
        className="figure"
        data-node-type="apm-video"
        data-url="https://www.youtube.com/watch?v=OIf7d60lOR0"
      >
        <div
          className={classes}
          title={short_caption}
          dangerouslySetInnerHTML={this.markup(embed?.html)}
        />
        {credit_name && (
          <figcaption className="figure_caption">
            <span className="figure_credit">
              <a href={credit_url}>{credit_name}</a>
            </span>
            <div className="figure_caption_content">{long_caption}</div>
          </figcaption>
        )}
      </figure>
    );
  }
}

ApmVideo.propTypes = {
  nodeData: PropTypes.object,
  embedded: PropTypes.object,
  minimal: PropTypes.bool,
  isAmp: PropTypes.bool
};

export default ApmVideo;
