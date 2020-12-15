import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'apm_inline_frame',
      attrs: {
        description: 'this is an example',
        height: '500',
        src: 'https://mdn-samples.mozilla.org/snippets/html/iframe-simple-contents.html',
        width: ''
      }
    }
  ]
};

test('It renders an iFrame', async () => {
  const { container } = render(
    <Body nodeData={doc} />
  );

  const expected = "<iframe class=\"apm-inline-frame\" frameborder=\"0\" height=\"500\" src=\"https://mdn-samples.mozilla.org/snippets/html/iframe-simple-contents.html\" title=\"this is an example\" width=\"\"></iframe>";
  expect(container.innerHTML).toEqual(expected);
});

