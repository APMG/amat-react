import React from 'react';
import VideoPlayer from './VideoPlayer';

describe('VideoPlayer', () => {
  // iframe data
  const facebook = {
    credit: { name: 'jason', url: 'https://www.facebook.com' },
    url: 'https://www.facebook.com/MPRnews/videos/337942824530987'
  };
  const facebookWithNoCreditName = {
    credit: { url: 'https://www.facebook.com' },
    url: 'https://www.facebook.com/MPRnews/videos/337942824530987'
  };
  const youtube = {
    credit: { name: 'jason3', url: 'https://www.youtube.com' },
    url: 'https://www.youtube.com/watch?v=JrAPSy9Rboc'
  };
  // html player data
  const vimeo = {
    credit: { name: 'jason2', url: 'https://vimeo.com' },
    url:
      'https://player.vimeo.com/external/543289941.hd.mp4?s=63b6e14c286059e3c358337878bc3fe7d77d0e8d&profile_id=174'
  };
  const mprApmcdn = {
    credit: { name: 'jason3', url: 'https://mpr.apmcdn.org' },
    url: 'https://mpr.apmcdn.org/video/apmreports/bia3sm.mp4'
  };

  test('return facebook iframe if facebook.url matches the uri.hostname, www.facebook.com', () => {
    const result = VideoPlayer(facebook, false);
    expect(VideoPlayer(facebook, false)).toBeDefined();
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    expect(result).toEqual(
      <div className="iframe-container">
        <iframe
          title="jason"
          src={
            'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/MPRnews/videos/337942824530987&show_text=0'
          }
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          allowFullScreen="true"
        ></iframe>
      </div>
    );
  });
  test('return facebook iframe with blank for title if facebook.url matches the uri.hostname + no credit name, www.facebook.com', () => {
    const result = VideoPlayer(facebookWithNoCreditName, false);
    expect(VideoPlayer(facebookWithNoCreditName, false)).toBeDefined();
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    expect(result).toEqual(
      <div className="iframe-container">
        <iframe
          title=" "
          src={
            'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/MPRnews/videos/337942824530987&show_text=0'
          }
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          allowFullScreen="true"
        ></iframe>
      </div>
    );
  });
  test('return youtube iframe if youtube.url matches the uri.hostname, www.youtube.com', () => {
    const result = VideoPlayer(youtube);
    expect(VideoPlayer(youtube, false)).toBeDefined();
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    expect(result).toEqual(
      <div className="iframe-container">
        <iframe
          title="jason3"
          src={'https://www.youtube.com/embed/JrAPSy9Rboc'}
        ></iframe>
      </div>
    );
  });
  test('return vimeo html5 player if vimeo.url matches the uri.hostname, player.vimeo.com', () => {
    const result = VideoPlayer(vimeo, false);
    expect(VideoPlayer(vimeo, false)).toBeDefined();
    expect(result).toEqual(
      <video id={vimeo.credit.name} autoPlay={true} muted={true} loop={true}>
        <source src={vimeo.url} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    );
  });
  test('return mpr.apmcdn html5 player if mpr.apmcdn matches the uri.hostname, mpr.apmcdn.org', () => {
    const result = VideoPlayer(mprApmcdn, false);
    expect(VideoPlayer(mprApmcdn, false)).toBeDefined();
    expect(result).toEqual(
      <video
        id={mprApmcdn.credit.name}
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src={mprApmcdn.url} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    );
  });

  test('AMP: return facebook iframe if facebook.url matches the uri.hostname, www.facebook.com', () => {
    const result = VideoPlayer(facebook, true);
    expect(VideoPlayer(facebook, true)).toBeDefined();
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    expect(result).toEqual(
      <amp-facebook
        data-embed-as="video"
        data-href="https://www.facebook.com/MPRnews/videos/337942824530987"
        layout="responsive"
        height="560"
        width="420"
      ></amp-facebook>
    );
  });
  test('AMP: return youtube iframe if youtube.url matches the uri.hostname, www.youtube.com', () => {
    const result = VideoPlayer(youtube, true);
    expect(VideoPlayer(youtube, true)).toBeDefined();
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    expect(result).toEqual(
      <amp-youtube
        data-videoid={'JrAPSy9Rboc'}
        width="500"
        height="360"
      ></amp-youtube>
    );
  });
  test('AMP: return vimeo html5 player if mpr.apmcdn matches the uri.hostname, player.vimeo.com', () => {
    const result = VideoPlayer(vimeo, true);
    expect(VideoPlayer(vimeo, true)).toBeDefined();
    expect(result).toEqual(
      <amp-video
        id={vimeo.credit.name}
        width="500"
        height="360"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={vimeo.url} type="video/mp4" />
      </amp-video>
    );
  });
  test('AMP: return mpr.apmcdn html5 player if mpr.apmcdn matches the uri.hostname, mpr.apmcdn.org', () => {
    const result = VideoPlayer(vimeo, true);
    expect(VideoPlayer(vimeo, true)).toBeDefined();
    expect(result).toEqual(
      <amp-video
        id={vimeo.credit.name}
        width="500"
        height="360"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={vimeo.url} type="video/mp4" />
      </amp-video>
    );
  });
});
