import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      content: [
        {
          text: 'A paragraph',
          type: 'text'
        }
      ],
      type: 'paragraph'
    },
    {
      content: [
        {
          text: 'Another paragraph',
          type: 'text'
        }
      ],
      type: 'paragraph'
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.firstChild.tagName).toEqual('P');
  expect(container.lastChild.tagName).toEqual('P');
  expect(container.firstChild.innerHTML).toEqual('A paragraph');
  expect(container.lastChild.innerHTML).toEqual('Another paragraph');
});
