import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href:
                  'https://www.americanpublicmedia.org/apm-research-lab-finds-37-percent-of-americans-more-likely-to-view-minneapolis-as-a-desirable-destination-following-super-bowl-lii-coverage/',
                title: ''
              }
            }
          ],
          text: 'READ THE PRESS RELEASE'
        }
      ]
    }
  ]
};

test('It renders a link in a paragraph', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.firstChild.tagName).toEqual('P');
  expect(container.firstChild.innerHTML).toEqual(
    `<a href="https://www.americanpublicmedia.org/apm-research-lab-finds-37-percent-of-americans-more-likely-to-view-minneapolis-as-a-desirable-destination-following-super-bowl-lii-coverage/">READ THE PRESS RELEASE</a>`
  );
});
