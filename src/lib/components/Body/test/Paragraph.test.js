import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from 'react-testing-library';
import Body from '../Body';

afterEach(cleanup);

const Doc = {
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
  const container = document.createElement('div');
  ReactDOM.render(<Body nodeData={Doc} />, container);
  expect(container.firstChild.tagName).toEqual('P');
  expect(container.lastChild.tagName).toEqual('P');
  expect(container.firstChild.innerHTML).toEqual('A paragraph');
  expect(container.lastChild.innerHTML).toEqual('Another paragraph');
});
