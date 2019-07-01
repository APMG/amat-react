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
        fallback_text: 'Hey, there...',
        fallback_url: 'http://example.com',
        html: '<blink>Hello, world!</blink>'
      },
      type: 'apm_custom_html'
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.firstChild.innerHTML).toEqual(
    '<blink>Hello, world!</blink>'
  );
});
