import React from 'react';
import Body from '../../components/Body/Body';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      attrs: {
        timestamp: '2019-09-04'
      },
      content: [
        {
          content: [
            {
              text: 'An update would go here.',
              type: 'text'
            }
          ],
          type: 'paragraph'
        }
      ],
      type: 'apm_correction'
    }
  ]
};

test('Renders footnote list', async () => {
  const { container } = render(<Body nodeData={doc} />);

  const expected = `<div class="apm-correction"><div class="apm-correction-title">Correction</div><div class="apm-correction-timestamp\">2019-09-04</div><div class=\"apm-correction-body\"><p>An update would go here.</p></div></div>`;
  expect(container.innerHTML).toEqual(expected);
});
