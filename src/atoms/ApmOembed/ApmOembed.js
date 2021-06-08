import React from 'react';
import PropTypes from 'prop-types';
import EmbedContainer from 'react-oembed-container';
import AmpVideo from '../ApmVideo/AmpVideo';
import AmpTwitter from '../Amp/AmpTwitter/AmpTwitter';

const ApmOembed = (props) => {
  if (props.minimal) {
    return null;
  }

  function findEmbedded() {
    if (!props.embedded || !props.embedded.oembeds) {
      return null;
    }

    const embed = props.embedded.oembeds.find(
      (embed) => embed.url === props.nodeData.attrs.src
    );
    if (!embed) {
      return null;
    }
    return embed;
  }

  const embed = findEmbedded();
  if (props.isAmp && embed?.provider_name === 'Twitter') {
    return <AmpTwitter {...props} embed={embed} />;
  }

  if (props.isAmp && embed?.type === 'video') {
    return <AmpVideo {...embed} />;
  }

  const markup = (rawMarkup = '', isAmp) => {
    let __html;
    __html = rawMarkup.replace(/\n/g, '');
    if (isAmp) {
      __html = __html
        .replace(/<iframe/g, '<amp-iframe')
        .replace(/<\/iframe/g, '</amp-iframe')
        .replace(/<side-chain/g, '<amp-iframe width="600" height="600"')
        .replace(/<\/side-chain/g, '</amp-iframe');
    }
    return { __html };
  };

  if (embed == null || embed == undefined) {
    return (
      <div className="amat-oembed missing" data-url={props.nodeData.attrs.src}>
        <a href={props.nodeData.attrs.src}>#{props.fallback_text}</a>
      </div>
    );
  }

  const cname =
    embed && embed.provider_name
      ? embed.provider_name.toLowerCase().replace(/\s/g, '')
      : '';
  const mup = markup(embed.html, props.isAmp);
  return (
    <EmbedContainer markup={mup.__html}>
      <div
        data-testid="embed-container"
        className={`amat-oembed ${cname}`}
        data-url={embed.url}
        dangerouslySetInnerHTML={mup}
      />
    </EmbedContainer>
  );
};

ApmOembed.propTypes = {
  embedded: PropTypes.object,
  nodeData: PropTypes.object,
  minimal: PropTypes.bool,
  fallback_text: PropTypes.string,
  isAmp: PropTypes.bool
};

export default ApmOembed;
