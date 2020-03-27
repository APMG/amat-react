import React from 'react';
import Body from '../../components/Body/Body';
import { render, cleanup } from '@testing-library/react';
import footnotesDoc from '../../fixtures/footnotes_doc.json';
import { singleLineString } from '../../utils/utils';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      attrs: {
        number: 2
      },
      content: [
        {
          content: [
            {
              text: 'Second footnote',
              type: 'text'
            }
          ],
          type: 'paragraph'
        }
      ],
      type: 'apm_footnote'
    }
  ]
};

test('Renders footnotes', async () => {
  const { container } = render(<Body nodeData={doc} />);

  const expected = `<a id="footnote-link-2" class="footnote" href="#footnote-content-2">2</a>`;
  expect(container.innerHTML).toEqual(expected);
});

test('Renders doc', async () => {
  const { container } = render(<Body nodeData={footnotesDoc} />);
  const expected = `
  <h3 id="a_header">A header</h3>
  <p>First paragraph<a id="footnote-link-1" class="footnote" href="#footnote-content-1">1</a></p>
  <p>Second paragraph<a id="footnote-link-2" class="footnote" href="#footnote-content-2">2</a><a id="footnote-link-3" class="footnote" href="#footnote-content-3">3</a></p>
  <div class="footnotes" data-testid="footnote-list">
    <div class="footnotes-header">Footnotes</div>
    <div class="footnote">
      <div class="footnote-number">1.</div>
      <div id="footnote-content-1" class="footnote-content">
        <p>First footnote</p>
      </div>
      <a class="footnote-back-link" href="#footnote-link-1" title="return to text near footnote 1">↩</a>
    </div>
    <div class="footnote">
      <div class="footnote-number">2.</div>
      <div id="footnote-content-2" class="footnote-content">
        <p>Second footnote</p>
      </div>
      <a class="footnote-back-link" href="#footnote-link-2" title="return to text near footnote 2">↩</a>
    </div>
    <div class="footnote">
      <div class="footnote-number">3.</div>
      <div id="footnote-content-3" class="footnote-content">
        <p>Third footnote</p>
      </div>
      <a class="footnote-back-link" href="#footnote-link-3" title="return to text near footnote 3">↩</a>
    </div>
  </div>
  `;
  expect(container.innerHTML).toEqual(singleLineString(expected));
});
