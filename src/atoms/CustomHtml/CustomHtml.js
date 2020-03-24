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
    if (this.props.minimal || this.props.isAmp) {
      return (
        <a href={this.props.nodeData.attrs.fallback_url}>
          {this.props.nodeData.attrs.fallback_text}
        </a>
      )
    }

    const markup = { __html: this.state.html};

    return <div className="customHtml" dangerouslySetInnerHTML={markup} />;
  }
}

CustomHtml.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool,
  isAmp: PropTypes.bool
};

export default CustomHtml;

function cleanHtml(attrs) {
  let doc = new DOMParser().parseFromString(attrs.html, 'text/html');

  // see if there are any scripts or iframes in the code
  let iframes = doc.querySelectorAll('iframe');
  let scripts = doc.querySelectorAll('script');
  let fallbackUrl = attrs.fallback_url;
  let whitelistRegex = new RegExp(whitelist.approved.join('|'));

  // set up some conditionals for the logic below
  let cond = {
    isIframe: iframes.length > 0,
    hasScript: scripts.length > 0,
    hasFallbackUrl: fallbackUrl !== '',
    isApproved: whitelistRegex.test(fallbackUrl)
  };

  if (!cond.isIframe && cond.hasScript) {
    if (cond.hasFallbackUrl && cond.isApproved) {
      // if a valid script is provided but not in an iframe, wrap in an iframe
      return `<iframe width="100%" height="500px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="${fallbackUrl}"></iframe>`;
    } else if (!cond.hasFallbackUrl) {
      // Scroll through the script(s), get their srcs (if applicable) and check against whitelist.
      [].forEach.call(scripts, function(script) {
        let isAllowed = whitelistRegex.test(script.src);

        if (!isAllowed) {
          script.parentNode.removeChild(script);
        }
      });

      let docString = new XMLSerializer().serializeToString(doc);
      return `<iframe width="100%" height="500px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="${`data:text/html;charset=utf-8,${encodeURI(
        docString
      )}`}"></iframe>`;

      // this is kind of a last-ditch thing that *may* not work depending on the individual code being inserted, whether it is being run on localhost or on prod, and whether it uses cookies. Your best bet is really making your own <iframe />
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
