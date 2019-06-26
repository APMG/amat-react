import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';
import { singleLineString } from '../../utils/utils';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      attrs: {
        title: 'This is some other cool stuff'
      },
      content: [
        {
          attrs: {
            prefix: 'More about',
            title: 'Bears',
            url: 'http://mnzoo.org/blog/animals/brown-bear/'
          },
          type: 'apm_related_link'
        }
      ],
      type: 'apm_related_list'
    }
  ]
};

test('It renders a list of related links', () => {
  const { container } = render(<Body nodeData={doc} />);

  const expected = `<div class="apm-related-list">
          <div class="apm-related-list-title">This is some other cool stuff</div>
          <ul class="apm-related-list-body">
            <li class="apm-related-link">
              <span class="apm-related-link-prefix">More about</span><a href="http://mnzoo.org/blog/animals/brown-bear/">Bears</a>
            </li>
          </ul>
        </div>`;

  expect(container.innerHTML).toEqual(singleLineString(expected));
});
