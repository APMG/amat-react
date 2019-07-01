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
              type: 'strong'
            }
          ],
          text: 'This here is bolded.'
        }
      ]
    }
  ]
};

test('It renders a link in a paragraph', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.innerHTML).toEqual(
    '<p><strong>This here is bolded.</strong></p>'
  );
});
