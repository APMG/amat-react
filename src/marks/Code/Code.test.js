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
              type: 'code'
            }
          ],
          text: 'This here is code.'
        }
      ]
    }
  ]
};

test('It puts code text in <code> tags', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.firstChild.innerHTML).toEqual(
    '<code>This here is code.</code>'
  );
});
