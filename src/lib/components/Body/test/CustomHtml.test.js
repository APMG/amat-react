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
        fallback_text: 'Hey, there...',
        fallback_url: 'http://example.com',
        html: '<blink>Hello, world!</blink>'
      },
      type: 'apm_custom_html'
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Body nodeData={Doc} />, container);
  // expect(container.firstChild.tagName).toEqual('BLINK');
  expect(container.firstChild.innerHTML).toEqual(
    '<blink>Hello, world!</blink>'
  );
});
