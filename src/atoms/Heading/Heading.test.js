import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      attrs: {
        level: 1
      },
      content: [
        {
          text: 'A header',
          type: 'text'
        }
      ],
      type: 'heading'
    },
    {
      content: [
        {
          text: 'A paragraph',
          type: 'text'
        }
      ],
      type: 'paragraph'
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.firstChild.tagName).toEqual('H1');
  expect(container.lastChild.tagName).toEqual('P');
  expect(container.firstChild.innerHTML).toEqual('A header');
  expect(container.lastChild.innerHTML).toEqual('A paragraph');
});
