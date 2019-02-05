import React from "react";

class ApmOembed extends React.Component {
  constructor(props) {
    super(props);
  }

  findEmbedded() {
    return this.props.embedded.oembeds.find(embed => {
      return embed.href === this.props.nodeData.attrs.src;
    });
  }

  markup(rawMarkup) {
    return { __html: rawMarkup };
  }

  render() {
    const { src } = this.props.nodeData.attrs;
    const embed = this.findEmbedded();
    const cname = embed.provider_name.toLowerCase().replace(/\s/g, "");
    return (
      <div
        className={`amat-oembed ${cname}`}
        data-url={src}
        dangerouslySetInnerHTML={this.markup(embed.html)}
      />
    );
  }
}

export default ApmOembed;
