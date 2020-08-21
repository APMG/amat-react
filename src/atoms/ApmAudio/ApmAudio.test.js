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
        float: 'right',
        width: 'full',
        audio_credit: 'American Public Media - 2017',
        title: 'Some sound from the intervieWWWWWWWWW',
        description: '"this is the description"',
        id: '1PHWXXMZZY2VXMNW99XRF67BXM',
        url:
          'http://download.publicradio.org/minnesota/archive_portal/NHPRC/95222.mp3',
        origin: 'cody'
      },
      type: 'apm_audio'
    }
  ]
};

const embeddedAssetJson = {
  audio: [
    {
      id: '1PHWXXMZZY2VXMNW99XRF67BXM',
      encodings: [
        {
          play_file_path:
            'https://play-dev.publicradio.org/%user_agent/o/devel/foo/foo_20191204_2_128.mp3'
        }
      ]
    }
  ]
};

test('It renders audio', () => {
  const { container } = render(
    <Body nodeData={doc} embedded={embeddedAssetJson} />
  );

  const expected = `
      <figure class="figure full align-right">
        <audio controls="" src="https://play-dev.publicradio.org/web/o/devel/foo/foo_20191204_2_128.mp3">
        </audio>
        <figcaption class="figure_caption">
          <div class="figure_caption_content">
            Some sound from the intervieWWWWWWWWW
          </div>
          <span class="figure_credit">
            by American Public Media - 2017
          </span>
        </figcaption>
      </figure>
  `;

  expect(container.innerHTML).toEqual(singleLineString(expected));
});

const doc2 = {
  type: 'doc',
  version: 1,
  content: [
    {
      attrs: {
        float: 'right',
        width: 'full',
        audio_credit: 'American Public Media - 2017',
        title: 'Some sound from the intervieWWWWWWWWW',
        description: '"this is the description"',
        audio_id: '1PHWXXMZZY2VXMNW99XRF67BXM',
        url:
          'http://download.publicradio.org/minnesota/archive_portal/NHPRC/95222.mp3',
        origin: 'cody'
      },
      type: 'apm_audio'
    }
  ]
};

test('It renders audio when we have id instead of audio_id', () => {
  const { container } = render(
    <Body nodeData={doc2} embedded={embeddedAssetJson} />
  );

  const expected = `
      <figure class="figure full align-right">
        <audio controls="" src="https://play-dev.publicradio.org/web/o/devel/foo/foo_20191204_2_128.mp3">
        </audio>
        <figcaption class="figure_caption">
          <div class="figure_caption_content">
            Some sound from the intervieWWWWWWWWW
          </div>
          <span class="figure_credit">
            by American Public Media - 2017
          </span>
        </figcaption>
      </figure>
  `;

  expect(container.innerHTML).toEqual(singleLineString(expected));
});


test('It renders AMP audio', () => {
  const { container } = render(
    <Body nodeData={doc} embedded={embeddedAssetJson} isAmp={true} />
  );

  const expected = `
      <figure class="figure full align-right">
        <amp-audio width="400" height="42" src="https://play-dev.publicradio.org/web/o/devel/foo/foo_20191204_2_128.mp3">
        </amp-audio>
        <figcaption class="figure_caption">
          <div class="figure_caption_content">
            Some sound from the intervieWWWWWWWWW
          </div>
          <span class="figure_credit">
            by American Public Media - 2017
          </span>
        </figcaption>
      </figure>
  `;

  expect(container.innerHTML).toEqual(singleLineString(expected));
});
