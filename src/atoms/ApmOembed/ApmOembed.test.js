import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'apm_oembed',
      attrs: {
        src: 'https://www.youtube.com/watch?v=OIf7d60lOR0',
        fallback_text: 'The magic of voicemail to email transcription'
      }
    }
  ]
};

const embedded = {
  oembeds: [
    {
      height: 270,
      provider_name: 'You Tube ',
      html:
        '<iframe width="480" height="270" src="https://www.youtube.com/embed/OIf7d60lOR0?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>',
      thumbnail_width: 480,
      author_name: 'Tim Post',
      title: 'The magic of voicemail to email transcription',
      width: 480,
      version: '1.0',
      author_url: 'https://www.youtube.com/user/timpost71',
      thumbnail_url: 'https://i.ytimg.com/vi/OIf7d60lOR0/hqdefault.jpg',
      provider_url: 'https://www.youtube.com/',
      thumbnail_height: 360,
      type: 'video',
      url: 'https://www.youtube.com/watch?v=OIf7d60lOR0'
    }
  ]
};

test('It renders an Oembed', async () => {
  const { container, getByTestId } = render(
    <Body nodeData={doc} embedded={embedded} />
  );

  const expected = `<div data-testid="embed-container" class="amat-oembed youtube" data-url="https://www.youtube.com/watch?v=OIf7d60lOR0"><iframe width="480" height="270" src="https://www.youtube.com/embed/OIf7d60lOR0?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe></div>`;
  await waitForElement(() => getByTestId('embed-container'));
  expect(container.innerHTML).toEqual(expected);
});

test('It renders an AMP Video', async () => {
  const { container, getByTestId } = render(
    <Body nodeData={doc} embedded={embedded} isAmp={true} />
  );

  const expected = `<amp-iframe data-testid="amp-video" src="https://www.youtube.com/embed/OIf7d60lOR0?feature=oembed" width="480" height="270" layout="responsive" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups"><amp-img placeholder="true" src="https://i.ytimg.com/vi/OIf7d60lOR0/hqdefault.jpg" width="480" height="360" layout="fill"></amp-img></amp-iframe>`;
  await waitForElement(() => getByTestId('amp-video'));
  expect(container.innerHTML).toEqual(expected);
});

test('It renders an AMP Video if provider name is missing', async () => {
  embedded.oembeds[0].provider_name = null;
  const { container, getByTestId } = render(
    <Body nodeData={doc} embedded={embedded} isAmp={true} />
  );

  const expected = `<amp-iframe data-testid="amp-video" src="https://www.youtube.com/embed/OIf7d60lOR0?feature=oembed" width="480" height="270" layout="responsive" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups"><amp-img placeholder="true" src="https://i.ytimg.com/vi/OIf7d60lOR0/hqdefault.jpg" width="480" height="360" layout="fill"></amp-img></amp-iframe>`;
  await waitForElement(() => getByTestId('amp-video'));
  expect(container.innerHTML).toEqual(expected);
});

const NprDoc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'apm_oembed',
      attrs: {
        src: 'https://apps.npr.org/liveblogs/20200203-iowa/embed.html'
      }
    }
  ]
};
const NprEmbedded = {
  oembeds: [
    {
      type: 'rich',
      version: '1.0',
      provider_name: 'NPR',
      provider_url: 'https://www.npr.org/',
      url: 'https://apps.npr.org/liveblogs/20200203-iowa/embed.html',
      html:
        '<div class=\'sidechain-wrapper\'>\n  <side-chain src="https://apps.npr.org/liveblogs/20200203-iowa/embed.html"></side-chain>\n</div>\n'
    }
  ]
};

test('It renders an NPR Fauxembed', async () => {
  const { container, getByTestId } = render(
    <Body nodeData={NprDoc} embedded={NprEmbedded} />
  );

  const NprExpected =
    '<div data-testid="embed-container" class="amat-oembed npr" data-url="https://apps.npr.org/liveblogs/20200203-iowa/embed.html"><div class="sidechain-wrapper">  <side-chain src="https://apps.npr.org/liveblogs/20200203-iowa/embed.html"></side-chain></div></div>';
  await waitForElement(() => getByTestId('embed-container'));
  expect(container.innerHTML).toEqual(NprExpected);
});

const TwitterDoc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'apm_oembed',
      attrs: {
        src: 'https://twitter.com/reactjs/status/964689022747475968',
        fallback_text: 'fallback text'
      }
    }
  ]
};
const TwitterEmbed = {
  oembeds: [
    {
      type: 'tweet',
      version: '1.0',
      provider_name: 'Twitter',
      provider_url: 'https:www.twitter.com',
      url: 'https://twitter.com/reactjs/status/964689022747475968',
      html:
        '<blockquote class="twitter-tweet" data-width="525" data-dnt="true"> <p lang="en" dir="ltr">We&#39;re relicensing React Native (including Fresco, Metro, and Yoga) under the MIT license to match React. <a href="https://t.co/Ypg7ozX958">https://t.co/Ypg7ozX958</a></p> <p>&mdash; React (@reactjs) <a href="https://twitter.com/reactjs/status/964689022747475968?ref_src=twsrc%5Etfw">February 17, 2018</a></p></blockquote> <p><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>'
    }
  ]
};
test('It renders a tweet with the expected js', async () => {
  const { container, getByTestId } = render(
    <Body nodeData={TwitterDoc} embedded={TwitterEmbed} />
  );
  await waitForElement(() => getByTestId('embed-container'));
  // make sure the dom has the twitter script
  const scripts = Array.from(document.body.querySelectorAll('script'));
  const twitterScript = scripts.find((scrpt) => scrpt.src.includes('twitter'));
  expect(twitterScript.src).toEqual('https://platform.twitter.com/widgets.js');
  expect(container.innerHTML).toMatch(/widget/);
});
