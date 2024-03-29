/* eslint-disable no-undef */
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

    // For tikTok video, add embed script
    if (
      element.querySelector('blockquote') &&
      element.getElementsByClassName('tiktok-embed')
    ) {
      let tikTok = element.getElementsByClassName('tiktok-embed')[0];
      let getTikTokCite = tikTok.getAttribute('cite');
      let getTitle = tikTok.getElementsByTagName('a')[0].innerHTML;
      let getHref = tikTok.getElementsByTagName('a')[0].getAttribute('href');
      let getVidID = element
        .getElementsByClassName('tiktok-embed')[0]
        .getAttribute('data-video-id');
      let getLastChildTitle = tikTok.getElementsByTagName('a')[1].innerHTML;
      let getLastChildHref = tikTok
        .getElementsByTagName('a')[1]
        .getAttribute('href');
      let getParagraph = tikTok.getElementsByTagName('p')[0].innerHTML;

      safeHtml = `
                <blockquote class="tiktok-embed" cite=${getTikTokCite} data-video-id=${getVidID} style="max-width: 200px;min-width:400px;">
                  <section>
                    <a target="_blank" title=${getTitle} href=${getHref}>
                      ${getTitle}
                    </a>
                    <p>${getParagraph}</p>
                    <a target="_blank" title=${getLastChildTitle} href=${getLastChildHref}>
                      ${getLastChildTitle}
                    </a>
                  </section>
                </blockquote>
              `;

      let tag = document.createElement('script');
      tag.type = 'text/javascript';
      tag.async = true;
      tag.src = 'https://www.tiktok.com/embed.js';
      document.head.appendChild(tag);
    }

    // If there is a custom html with an audio tag & includes a classname of inbody_audio_title, create a custom audio player
    if (
      element.querySelector('audio') &&
      element.getElementsByClassName('inbody_audio_title')[0]
    ) {
      let getAudioSrc = element.querySelector('audio').getAttribute('src');
      let getAudioTitle = element.getElementsByClassName(
        'inbody_audio_title'
      )[0].innerHTML;
      let getAudioDescription = element.getElementsByClassName(
        'inbody_audio_description'
      )[0].innerHTML;

      safeHtml = `
      <div class="audioPlayer">
        <audio id="player" src=${getAudioSrc} ontimeupdate="getStreamTime()"></audio>
          <div class="playPauseContainer">
            <button onClick="playPauseStreamBtn()" id="play-pause"/>
          </div>
          <div class="currentTime" id="trackTime">00:00</div>
          <div class="progressBarContainer">
            <div class="progressBar" id="progressBar"></div>
          </div>
          <div class="textBoxStream">
            <div class="textBoxTitle">
              ${getAudioTitle}
            </div>
            <div class="textBoxDescription">
              ${getAudioDescription}
            </div>
          </div>
      </div>`;

      window.playPauseStreamBtn = () => {
        const audio = document.getElementById('player');
        const controlBtn = document.getElementById('play-pause');
        if (audio.paused) {
          audio.play();
          controlBtn.className = 'pauseStream';
        } else {
          audio.pause();
          controlBtn.className = 'playStream';
        }
      };

      window.getStreamTime = () => {
        const trackTime = document.getElementById('trackTime');
        const audio = document.getElementById('player');
        const minutes = Math.floor(audio.currentTime / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(audio.currentTime % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        if (trackTime) {
          trackTime.innerHTML = `${returnedMinutes}:${returnedSeconds}`;
        }
      };
    }

    // If there is a script without a src, set the whole block in an iframe (or it might not work!)
    if (
      element.querySelector('script') &&
      !hasIframe &&
      !element.querySelector('form')
    ) {
      let src = '';
      if (whitelistRegex.test(fallback_url)) {
        src = fallback_url;
      }
      safeHtml = `<iframe width="100%" height="500px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="${src}">${element.innerHTML}</iframe>`;
    }

    // Enable submit button when recaptcha is successful
    if (element.querySelector('form')) {
      const script = document.createElement('script');
      const inlineScript = document.createTextNode(
        "function enableSubmit() { const subButton = document.getElementById('submitButton'); if (subButton) subButton.disabled = false; };"
      );
      script.appendChild(inlineScript);
      document.head.appendChild(script);
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
