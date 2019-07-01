import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'ordered_list',
      content: [
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Hello, '
                }
              ]
            }
          ]
        },
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'World!'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

test('It renders an unordered list', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.innerHTML).toEqual(
    '<ol><li><p>Hello,&nbsp;</p></li><li><p>World!</p></li></ol>'
  );
});
