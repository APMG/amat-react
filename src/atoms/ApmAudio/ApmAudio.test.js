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
        <audio controls="" controlslist="nodownload" src="https://play-dev.publicradio.org/web/o/devel/foo/foo_20191204_2_128.mp3">
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
        <audio controls="" controlslist="nodownload" src="https://play-dev.publicradio.org/web/o/devel/foo/foo_20191204_2_128.mp3">
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
        <amp-audio width="400" height="42" src="https://play-dev.publicradio.org/web/o/devel/foo/foo_20191204_2_128.mp3" controlslist="nodownload">
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

const embeddedAssetJson2 = {
  audio: [
    {
      id: '1PHWXXMZZY2VXMNW99XRF67BXM',
      downloadable: true,
      encodings: [
        {
          play_file_path:
            'https://play-dev.publicradio.org/%user_agent/o/devel/foo/foo_20191204_2_128.mp3',
          locations: [
            {
              location: 'streamguys-play',
              path:
                'https://play-dev.publicradio.org/%user_agent/o/devel/foo/foo_20191204_2_128.mp3'
            },
            {
              location: 'streamguys-http',
              path:
                'https://play-dev.publicradio.org/unreplaced_ua/o/devel/foo/foo_20191204_2_128.mp3'
            }
          ]
        }
      ]
    }
  ]
};

test('Audio is not marked as nodownload if the audio is flagged as downloadable', () => {
  const { container } = render(
    <Body nodeData={doc} embedded={embeddedAssetJson2} />
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

const embeddedAssetJsonWithMegaphone = {
  audio: [
    {
      id: '1PHWXXMZZY2VXMNW99XRF67BXM',
      encodings: [
        {
          play_file_path:
            'https://play-dev.publicradio.org/%user_agent/o/devel/foo/this_is_not_megaphone.mp3',
          locations: [
            {
              location: 'streamguys-play',
              path:
                'https://play-dev.publicradio.org/%user_agent/o/devel/foo/this_is_not_megaphone.mp3'
            },
            {
              location: 'streamguys-http',
              path:
                'https://play-dev.publicradio.org/unreplaced_ua/o/devel/foo/this_is_not_megaphone.mp3'
            },
            {
              location: 'megaphone',
              path: 'https://traffic.megaphone.fm/CAD7304315305.mp3'
            }
          ]
        }
      ]
    }
  ]
};

test('Audio source will choose megaphone if present', () => {
  const { container } = render(
    <Body nodeData={doc} embedded={embeddedAssetJsonWithMegaphone} />
  );

  const expected = `
  <figure class="figure full align-right">
    <audio controls="" controlslist="nodownload" src="https://traffic.megaphone.fm/CAD7304315305.mp3">
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

test('AMP audio source will choose megaphone if present', () => {
  const { container } = render(
    <Body
      nodeData={doc}
      embedded={embeddedAssetJsonWithMegaphone}
      isAmp={true}
    />
  );

  const expected = `
      <figure class="figure full align-right">
        <amp-audio width="400" height="42" src="https://traffic.megaphone.fm/CAD7304315305.mp3" controlslist="nodownload">
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
