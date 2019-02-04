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
  const container = document.createElement('div');
  ReactDOM.render(<Body nodeData={Doc} />, container);
  expect(container.firstChild.tagName).toEqual('H1');
  expect(container.lastChild.tagName).toEqual('P');
  expect(container.firstChild.innerHTML).toEqual('A header');
  expect(container.lastChild.innerHTML).toEqual('A paragraph');
});
