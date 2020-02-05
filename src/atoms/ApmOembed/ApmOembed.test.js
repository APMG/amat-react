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

  const expected = `<div><div data-testid="embed-container" class="amat-oembed youtube" data-url="https://www.youtube.com/watch?v=OIf7d60lOR0"><iframe width="480" height="270" src="https://www.youtube.com/embed/OIf7d60lOR0?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe></div></div>`;
  await waitForElement(() => getByTestId('embed-container'));
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
    '<div><div data-testid="embed-container" class="amat-oembed npr" data-url="https://apps.npr.org/liveblogs/20200203-iowa/embed.html"><div class="sidechain-wrapper">  <side-chain src="https://apps.npr.org/liveblogs/20200203-iowa/embed.html"></side-chain></div></div></div>';
  await waitForElement(() => getByTestId('embed-container'));
  expect(container.innerHTML).toEqual(NprExpected);
});
