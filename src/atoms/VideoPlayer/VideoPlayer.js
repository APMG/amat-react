import React from 'react';
import { youtubeParser } from '../../utils/utils'

const VideoPlayer = (video, isAmp) => {
  let playerEmbed;
  const uri = new URL (video.url)

  if (isAmp) {
    switch(uri.hostname) {
      case 'www.facebook.com':
        playerEmbed = <amp-facebook data-href={video.url} width="420" height="560" layout="responsive" data-embed-as="video"></amp-facebook>
          break;
      case 'player.vimeo.com':
      case 'mpr.apmcdn.org':
        playerEmbed = <amp-video id={video.credit.name} width="500" height="360" autoPlay="autoplay" muted="muted" loop="loop"><source src={video.url} type="video/mp4"/></amp-video>
          break;
      case 'www.youtube.com':
        playerEmbed =  <amp-youtube data-videoid={youtubeParser(video.url)} width="500" height="360"></amp-youtube>
          break;
      default:
        console.error(playerEmbed, 'source is not a valid video url')
    }
  } else {
    switch(uri.hostname) {
      case 'www.facebook.com':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        playerEmbed = <div className="iframe-container"><iframe src={`https://www.facebook.com/plugins/video.php?href=${video.url}&show_text=0`} scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe></div>
          break;
      case 'player.vimeo.com':
      case 'mpr.apmcdn.org':
        playerEmbed = <video id={video.credit.name} autoPlay={true} muted={true} loop={true}><source src={video.url} type="video/mp4"/>Your browser does not support HTML5 video.</video>
          break;
      case 'www.youtube.com':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        playerEmbed =  <div className="iframe-container"><iframe src={`https://www.youtube.com/embed/${youtubeParser(video.url)}`}></iframe></div>
          break;
      default:
        console.error(playerEmbed, 'source is not a valid video url')
    }
  }
  return playerEmbed
};

export default VideoPlayer;
