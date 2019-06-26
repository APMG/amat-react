import React from 'react';
import { render, cleanup } from '@testing-library/react';
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

test('It renders an Oembed', () => {
  const { container } = render(<Body nodeData={doc} embedded={embedded} />);

  const expected = `<div class="amat-oembed youtube" data-url="https://www.youtube.com/watch?v=OIf7d60lOR0"><iframe width="480" height="270" src="https://www.youtube.com/embed/OIf7d60lOR0?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe></div>`;

  expect(container.innerHTML).toEqual(expected.replace(/\n/, ''));
});
