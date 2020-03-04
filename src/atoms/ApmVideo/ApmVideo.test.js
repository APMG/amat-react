import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';
import { singleLineString } from '../../utils/utils';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      attrs: {
        credit: 'Credit where credit is due',
        credit_url: 'http://example.com/credit_where_credit_is_due',
        short_caption: '"Short cap"',
        long_caption: '"Long caption"',
        url: 'https://www.youtube.com/watch?v=OIf7d60lOR0'
      },
      type: 'apm_video'
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

test('It renders a video', () => {
  const { container } = render(<Body nodeData={doc} embedded={embedded} />);

  let expected = `
        <figure class="figure" data-node-type="apm-video" data-url="https://www.youtube.com/watch?v=OIf7d60lOR0"> <div class="apm-video youtube">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/OIf7d60lOR0?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
          </div>
          <figcaption class="figure_caption">
            <span class="figure_credit"><a href="http://example.com/credit_where_credit_is_due">Credit where credit is due</a></span>
            <div class="figure_caption_content">
              "Long caption"
            </div>
          </figcaption>
        </figure>`;
  let expectedOneLine = singleLineString(expected);

  expect(container.innerHTML).toEqual(expectedOneLine);
});

test('It renders an AMP video', () => {
  const { container } = render(
    <Body nodeData={doc} embedded={embedded} isAmp={true} />
  );

  let expected = `
        <figure class="figure" data-node-type="apm-video" data-url="https://www.youtube.com/watch?v=OIf7d60lOR0"> <div class="apm-video youtube">
            <amp-iframe width="480" height="270" src="https://www.youtube.com/embed/OIf7d60lOR0?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></amp-iframe>
          </div>
          <figcaption class="figure_caption">
            <span class="figure_credit"><a href="http://example.com/credit_where_credit_is_due">Credit where credit is due</a></span>
            <div class="figure_caption_content">
              "Long caption"
            </div>
          </figcaption>
        </figure>`;
  let expectedOneLine = singleLineString(expected);

  expect(container.innerHTML).toEqual(expectedOneLine);
});
