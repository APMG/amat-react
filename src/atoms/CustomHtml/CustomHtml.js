import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import whitelist from '../../utils/whitelist.json';

class CustomHtml extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      html: '',
      loaded: false
    };
  }

  componentDidMount() {
    const { html, safeScripts } = this.parseHtml({
      ...this.props.nodeData.attrs,
      whitelist: whitelist.approved
    });

    // eslint-disable-next-line
    const node = ReactDOM.findDOMNode(this.myRef.current);
    if (!this.state.loaded) {
      safeScripts.forEach((script) => {
        this.loadScript(script.src, node);
      });
    }

    this.setState({
      html,
      loaded: true
    });
  }

  loadScript(src, node) {
    let tag = document.createElement('script');

    tag.type = 'text/javascript';
    tag.async = false; // Load in order
    tag.src = src;
    node.appendChild(tag);
    return tag;
  }

  loadNewScript(src, node) {
    let script = document.createElement('script');
    alert('Script loaded');

    script.setAttribute('type', 'text/javascript');
    script.async = false;
    node.appendChild(script);

    return script;
  }

  /**
   * Removes all scripts with an external source from the html and returns the whitelisted ones as an array of Nodes
   * @param {html: string, fallback_url: string, whitelist: Array}
   * @returns {html: string, safeScripts: Node[]}
   */
  parseHtml({ html, fallback_url, whitelist }) {
    const whitelistRegex = new RegExp(whitelist.join('|'));
    const element = this.htmlStringToElement(html);
    let safeHtml, scripts, safeScripts, hasIframe;

    if (!element) return { html: '', safeScripts: [] };

    scripts = Array.from(element.querySelectorAll('script[src]'));
    scripts.forEach((script) => {
      script.parentNode.removeChild(script);
    });
    safeScripts = scripts.filter((script) => whitelistRegex.test(script.src));
    safeHtml = element.innerHTML;
    hasIframe = element.querySelector('iframe');

    // If there is a script without a src, set the whole block in an iframe (or it might not work!)
    if (element.querySelector('script') && !hasIframe) {
      let src = '';
      if (whitelistRegex.test(fallback_url)) {
        src = fallback_url;
      }
      safeHtml = `<iframe width="100%" height="500px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="${src}">${element.innerHTML}</iframe>`;
    }

    // Enable submit button when recaptcha is successful
    if (element.querySelector('form')) {
      const script = document.createElement('script');
      script.innerHTML = function enableSubmit() {
        document.getElementById('submitButton').disabled = false;
      };
      document.head.append(script);
    }
    return { html: safeHtml, safeScripts };
  }

  htmlStringToElement(html) {
    if (typeof document == 'undefined') return false;
    let template = document.createElement('div');
    template.innerHTML = html;
    return template;
  }

  render() {
    if (this.props.minimal) {
      return null;
    }

    if (this.props.isAmp) {
      return this.props.nodeData.attrs.fallback_url ? (
        <a href={this.props.nodeData.attrs.fallback_url}>
          {this.props.nodeData.attrs.fallback_text}
        </a>
      ) : null;
    }

    const markup = { __html: this.state.html };
    return (
      <div
        ref={this.myRef}
        className="customHtml"
        dangerouslySetInnerHTML={markup}
      />
    );
  }
}

CustomHtml.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool,
  isAmp: PropTypes.bool
};

export default CustomHtml;
