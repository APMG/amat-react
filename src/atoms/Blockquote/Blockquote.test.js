import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const citedDoc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'blockquote',
      attrs: {
        citation: 'Paul McCartney'
      },
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'A quote.'
            }
          ]
        }
      ]
    }
  ]
};

const uncitedDoc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'blockquote',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'A quote.'
            }
          ]
        }
      ]
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const { container } = render(<Body nodeData={citedDoc} />);

  expect(container.innerHTML).toEqual(
    '<blockquote><p>A quote.</p><cite>- Paul McCartney</cite></blockquote>'
  );
});

test('It renders a body from a Prosemirror doc without citation', () => {
  const { container } = render(<Body nodeData={uncitedDoc} />);

  expect(container.innerHTML).toEqual(
    '<blockquote><p>A quote.</p></blockquote>'
  );
});
