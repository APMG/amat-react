import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'apm_verse',
      content: [
        {
          type: 'text',
          text: '  poetic text.'
        },
        {
          type: 'hard_break'
        },
        {
          type: 'text',
          text: '  poetic text.'
        }

      ]
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.innerHTML).toEqual(
    '<div class="verse">  poetic text.<br>  poetic text.</div>'
  );
});
