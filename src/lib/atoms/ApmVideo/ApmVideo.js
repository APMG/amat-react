import React from "react";

class ApmVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  findEmbedded() {
    return this.props.embedded.oembeds.find(embed => {
      return embed.href === this.props.nodeData.attrs.url;
    });
  }

  markup(rawMarkup) {
    return { __html: rawMarkup };
  }

  render() {
    const { url, long_caption, credit, credit_url } = this.props.nodeData.attrs;
    const embed = this.findEmbedded();
    const cname = embed.provider_name.toLowerCase().replace(/\s/g, "");
    return (
      <figure
        className="figure"
        data-node-type="apm-video"
        data-url="https://www.youtube.com/watch?v=OIf7d60lOR0"
      >
        <div
          className={`apm-video ${cname}`}
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

export default ApmVideo;
