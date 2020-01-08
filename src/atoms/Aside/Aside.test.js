import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'aside',
      content: [
        {
          content: [
            {
              text: 'An aside.',
              type: 'text'
            }
          ],
          type: 'paragraph'
        }
      ]
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.innerHTML).toEqual('<aside><p>An aside.</p></aside>');
});
