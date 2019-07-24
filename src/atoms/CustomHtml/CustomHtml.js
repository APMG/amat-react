import React from 'react';
import PropTypes from 'prop-types';
import whitelist from '../../utils/whitelist.json';

class CustomHtml extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      html: ''
    };
  }

  componentDidMount() {
    this.setState({
      html: cleanHtml(this.props.nodeData.attrs)
    });
  }

  render() {
    if (this.props.minimal) {
      return null;
    }

    const markup = { __html: this.state.html };

    return <div className="customHtml" dangerouslySetInnerHTML={markup} />;
  }
}

CustomHtml.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool
};

export default CustomHtml;

function cleanHtml(attrs) {
  let doc = new DOMParser().parseFromString(attrs.html, 'text/html');

  // see if there are any scripts or iframes in the code
  let iframes = doc.querySelectorAll('iframe');
  let scripts = doc.querySelectorAll('script');
  let fallbackUrl = attrs.fallback_url;
  let whitelistRegex = new RegExp(whitelist.approved.join('|'));

  let cond = {
    isIframe: iframes.length > 0,
    hasScript: scripts.length > 0,
    hasFallbackUrl: fallbackUrl !== '',
    isApproved: whitelistRegex.test(fallbackUrl) // TODO: test me in isolation
  };

  if (!cond.isIframe && cond.hasScript) {
    // if a valid script is provided but not in an iframe, wrap in an iframe
    if (cond.hasFallbackUrl && cond.isApproved) {
      return `<iframe width="100%" height="650px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="${fallbackUrl}"></iframe>`;
    } else {
      // otherwise, strip out the scripts and return that HTML lump
      [].forEach.call(scripts, function(script) {
        script.parentNode.removeChild(script);
      });

      let docString = new XMLSerializer().serializeToString(doc);
      return docString;
    }
  } else {
    // if there are no scripts, just return the html
    return attrs.html;
  }
}
