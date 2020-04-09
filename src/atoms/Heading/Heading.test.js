import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'heading',
      attrs: { level: 1, anchor: null },
      content: [{ text: "A header's header is no better", type: 'text' }]
    },
    {
      content: [
        {
          text: 'A "paragraph"',
          type: 'text'
        }
      ],
      type: 'paragraph'
    }
  ]
};

const docEmptyHeader = {
  type: 'doc',
  version: 1,
  content: [
    { type: 'heading', attrs: { level: 2, anchor: null } },
    {
      content: [
        {
          text: 'A "paragraph"',
          type: 'text'
        }
      ],
      type: 'paragraph'
    }
  ]
};

test('It renders a heading properly from a Prosemirror doc', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.firstChild.tagName).toEqual('H1');
  expect(container.firstChild.getAttribute('id')).toEqual(
    'h1_a_headers_header_is_no_better'
  );
  expect(container.lastChild.tagName).toEqual('P');
  expect(container.firstChild.innerHTML).toEqual(
    "A header's header is no better"
  );
  expect(container.lastChild.innerHTML).toEqual('A "paragraph"');
});

test('It renders null for an empty heading', () => {
  const { container } = render(<Body nodeData={docEmptyHeader} />);

  expect(container.firstChild.tagName).toEqual('P');
  expect(container.firstChild.getAttribute('id')).toEqual(null);
  expect(container.firstChild.innerHTML).toEqual('A "paragraph"');
});
