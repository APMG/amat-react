import React from 'react';
import PropTypes from 'prop-types';
import EmbedContainer from '@apmg/react-oembed-container';
import AmpVideo from '../AmpVideo/AmpVideo';

const ApmOembed = (props) => {
  if (props.minimal) {
    return null;
  }

  function findEmbedded() {
    return props.embedded.oembeds.find(
      (embed) => embed.url === props.nodeData.attrs.src
    );
  }

  const embed = findEmbedded();
  if (props.isAmp && embed?.type === 'video') {
    return <AmpVideo {...embed} />;
  }

  const markup = (rawMarkup, isAmp) => {
    let __html = rawMarkup.replace(/\n/g, '');
    if (isAmp) {
      __html = __html
        .replace(/<iframe/g, '<amp-iframe')
        .replace(/<\/iframe/g, '</amp-iframe')
        .replace(/<side-chain/g, '<amp-iframe')
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
  const html = markup(embed.html, props.isAmp);
  return (
    <EmbedContainer markup={embed.html}>
      <div
        data-testid="embed-container"
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
  minimal: PropTypes.bool,
  fallback_text: PropTypes.string,
  isAmp: PropTypes.bool
};

export default ApmOembed;
