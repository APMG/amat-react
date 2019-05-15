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

test('It renders a link in a paragraph', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Body nodeData={Doc} />, container);
  expect(container.firstChild.innerHTML).toEqual(
    '<em>This here is emphasized.</em>'
  );
});
