import React from "react";

class ApmOembed extends React.Component {
  constructor(props) {
    super(props);
  }

  findEmbedded() {
    return this.props.embedded.oembeds.find(embed => {
      return embed.url === this.props.nodeData.attrs.src;
    });
  }

  markup(rawMarkup) {
    return { __html: rawMarkup };
  }

  render() {
    const embed = this.findEmbedded();
    if (!embed) {
      return <></>;
    }
    const cname =
      embed && embed.provider_name
        ? embed.provider_name.toLowerCase().replace(/\s/g, "")
        : "";
    return (
      <div
        className={`amat-oembed ${cname}`}
        data-url={embed.url}
        dangerouslySetInnerHTML={this.markup(embed.html)}
      />
    );
  }
}

export default ApmOembed;
