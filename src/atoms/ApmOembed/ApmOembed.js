import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AmpVideo from '../ApmVideo/AmpVideo';
import AmpTwitter from '../Amp/AmpTwitter/AmpTwitter';
import AmpInstagram from '../Amp/AmpInstagram/AmpInstagram';
import { injectScript, htmlStringToElement } from '../../utils/scripts';

const ApmOembed = (props) => {
  if (props.minimal) {
    return null;
  }
  const [markup, setMarkup] = useState({ __html: '' });
  const embed = findEmbedded();

  useEffect(() => {
    if (embed) {
      setMarkup(getMarkup(embed.html, props.isAmp));
      const ele = htmlStringToElement(embed.html);
      const scripts = Array.from(ele.querySelectorAll('script'));
      scripts.forEach((scrpt) => {
        injectScript(document.body, scrpt);
      });
    }
  }, [embed]);

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

  if (props.isAmp && embed?.provider_name === 'Twitter') {
    return <AmpTwitter {...props} embed={embed} />;
  }
  if (props.isAmp && embed?.provider_name === 'Instagram') {
    return <AmpInstagram minimal={props.minimal} embed={embed} />;
  }
  if (props.isAmp && embed?.type === 'video') {
    return <AmpVideo {...embed} />;
  }

  function getMarkup(rawMarkup = '', isAmp) {
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
  }

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

  return (
    <div
      data-testid="embed-container"
      className={`amat-oembed ${cname}`}
      data-url={embed.url}
      dangerouslySetInnerHTML={markup}
    />
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
