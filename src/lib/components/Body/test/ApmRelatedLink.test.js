import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from 'react-testing-library';
import Body from '../Body';
import { singleLineString } from '../../../utils/Utils';

afterEach(cleanup);

const Doc = {
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
  const container = document.createElement('div');
  ReactDOM.render(<Body nodeData={Doc} />, container);
  const expected = `<a class="apm-related-link" href="http://mnzoo.org/blog/animals/brown-bear/"><span class="apm-related-link-prefix">More about</span> Bears</a>`;

  expect(container.innerHTML).toEqual(singleLineString(expected));
});
