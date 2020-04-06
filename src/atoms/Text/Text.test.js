import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      text: 'Some Text',
      type: 'text'
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.innerHTML).toEqual('Some Text');
});

const docWSpecicalCharacters = {
  type: 'doc',
  version: 1,
  content: [
    {
      text:
        'Some Text & more text with special characters like a < and a > and also a " and a \'.',
      type: 'text'
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const { container } = render(<Body nodeData={docWSpecicalCharacters} />);

  expect(container.innerHTML).toEqual(
    'Some Text &amp; more text with special characters like a &lt; and a &gt; and also a " and a \'.'
  );
});
