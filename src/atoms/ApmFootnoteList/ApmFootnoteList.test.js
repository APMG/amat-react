import React from 'react';
import Body from '../../components/Body/Body';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      content: [
        {
          attrs: {
            number: 1,
            footnoteContent: {
              content: [
                {
                  content: [
                    {
                      text: 'A footnote',
                      type: 'text'
                    }
                  ],
                  type: 'paragraph'
                }
              ]
            }
          },
          type: 'apm_footnote'
        }
      ],
      type: 'apm_footnote_list'
    }
  ]
};

test('Renders footnote list', async () => {
  const { container } = render(<Body nodeData={doc} />);

  const expected = `<div class="footnotes" data-testid="footnote-list"><div class="footnotes-header">Footnotes</div><div class="footnote"><div class="footnote-number">1.</div><div id="footnote-content-1" class="footnote-content"><p>A footnote</p></div><a class="footnote-back-link" href="#footnote-link-1" title="return to text near footnote 1">↩</a></div></div>`;
  expect(container.innerHTML).toEqual(expected);
});
