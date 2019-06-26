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
        audio_id: '1PHWXXMZZY2VXMNW99XRF67BXM',
        url:
          'http://download.publicradio.org/minnesota/archive_portal/NHPRC/95222.mp3',
        origin: 'cody'
      },
      type: 'apm_audio'
    }
  ]
};

test('It renders audio', () => {
  const { container } = render(<Body nodeData={doc} />);

  const expected = `
      <figure class="figure full align-right">
        <audio controls="" src="http://download.publicradio.org/minnesota/archive_portal/NHPRC/95222.mp3">
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
