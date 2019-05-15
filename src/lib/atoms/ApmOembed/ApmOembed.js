import React from 'react';
import PropTypes from 'prop-types';

const ApmOembed = (props) => {
  const findEmbedded = () => {
    const ret = props.embedded.oembeds.find((embed) => {
      return embed.url === props.nodeData.attrs.src;
    });
    return ret;
  };

  const markup = (rawMarkup) => {
    return { __html: rawMarkup };
  };

  let embed;
  try {
    embed = findEmbedded();
  } catch (err) {
    return <></>;
  }
  const cname =
    embed && embed.provider_name
      ? embed.provider_name.toLowerCase().replace(/\s/g, '')
      : '';
  return (
    <div
      className={`amat-oembed ${cname}`}
      data-url={embed.url}
      dangerouslySetInnerHTML={markup(embed.html)}
    />
  );
};

ApmOembed.propTypes = {
  embedded: PropTypes.object,
  nodeData: PropTypes.object
};

export default ApmOembed;
