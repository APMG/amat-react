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
        prefix: 'More about',
        title: 'Bears',
        url: 'http://mnzoo.org/blog/animals/brown-bear/'
      },
      type: 'apm_related_link'
    }
  ]
};

test('It renders a related link', () => {
  const { container } = render(<Body nodeData={doc} />);

  const expected = `<a class="apm-related-link" href="http://mnzoo.org/blog/animals/brown-bear/"><span class="apm-related-link-prefix">More about</span> Bears</a>`;

  expect(container.innerHTML).toEqual(singleLineString(expected));
});
