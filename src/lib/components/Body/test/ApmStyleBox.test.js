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
      type: 'apm_style_box',
      attrs: {
        custom_class: 'poem'
      },
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Styled text.'
            }
          ]
        }
      ]
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Body nodeData={Doc} />, container);
  expect(container.innerHTML).toEqual(
    '<div class="apm-style-box poem"><p>Styled text.</p></div>'
  );
});
