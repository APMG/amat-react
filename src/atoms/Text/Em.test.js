import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          marks: [
            {
              type: 'em'
            }
          ],
          text: 'This here is emphasized.'
        }
      ]
    }
  ]
};

test('It puts italicized text in <em> tags', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.firstChild.innerHTML).toEqual(
    '<em>This here is emphasized.</em>'
  );
});
