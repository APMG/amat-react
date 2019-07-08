import React from 'react';
import PropTypes from 'prop-types';
import EmbedContainer from 'react-oembed-container';

const ApmOembed = (props) => {
  if (props.minimal) {
    return null;
  }
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
  const html = markup(embed.html);
  return (
    <EmbedContainer markup={embed.html}>
      <div
        className={`amat-oembed ${cname}`}
        data-url={embed.url}
        dangerouslySetInnerHTML={html}
      />
    </EmbedContainer>
  );
};

ApmOembed.propTypes = {
  embedded: PropTypes.object,
  nodeData: PropTypes.object,
  minimal: PropTypes.bool
};

export default ApmOembed;
