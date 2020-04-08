import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';
import { singleLineString } from '../../utils/utils';

afterEach(cleanup);

const doc = {
  content: [
    {
      type: 'apm_table_of_contents',
      attrs: {
        anchors: [
          {
            level: 1,
            linkText: 'Heading 1',
            anchor: 'h1_heading_1'
          },
          {
            level: 2,
            linkText: 'Custom linkText',
            anchor: 'custom_anchor'
          }
        ]
      }
    },
    {
      attrs: {
        level: 1,
        anchor: 'h1_heading_1',
        linkText: 'Heading 1'
      },
      content: [
        {
          text: 'Heading 1',
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
    },
    {
      attrs: {
        level: 2,
        linkText: 'Custom linkText',
        anchor: 'custom_anchor'
      },
      content: [
        {
          text: 'Heading 2',
          type: 'text'
        }
      ],
      type: 'heading'
    },
    {
      content: [
        {
          text: 'more filler',
          type: 'text'
        }
      ],
      type: 'paragraph'
    },
    {
      attrs: {
        level: 3,
        linkText: 'Going to be ignored',
        anchor: 'not_used_in_this_test'
      },
      content: [
        {
          text: 'Heading 3',
          type: 'text'
        }
      ],
      type: 'heading'
    }
  ],
  type: 'doc'
};

test('It renders a table of contents', () => {
  const { container } = render(<Body nodeData={doc} />);

  let expected = `
        <ul class="table-of-contents">
            <li class="table-of-contents-level-1"><a href="#h1_heading_1">Heading 1</a>
            <li class="table-of-contents-level-2"><a href="#custom_anchor">Custom linkText</a>
          </ul>

          <h1 id="h1_heading_1">Heading 1</h1>
          <p>A paragraph</p>
          <h2 id="custom_anchor">Heading 2</h2>
          <p>more filler</p>
          <h3 id="not_used_in_this_test">Heading 3</h3>
        `;
  let expectedOneLine = singleLineString(expected);

  expect(container.innerHTML).toEqual(expectedOneLine);
});
