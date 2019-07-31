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
                className: 'default',
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

const docWithTitle = {
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
                className: 'default',
                href:
                  'https://www.americanpublicmedia.org/apm-research-lab-finds-37-percent-of-americans-more-likely-to-view-minneapolis-as-a-desirable-destination-following-super-bowl-lii-coverage/',
                title: 'title'
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
    `<a href="https://www.americanpublicmedia.org/apm-research-lab-finds-37-percent-of-americans-more-likely-to-view-minneapolis-as-a-desirable-destination-following-super-bowl-lii-coverage/" class="default">READ THE PRESS RELEASE</a>`
  );
});

test('It renders a link in a paragraph with a title', () => {
  const { container } = render(<Body nodeData={docWithTitle} />);

  expect(container.firstChild.tagName).toEqual('P');
  expect(container.firstChild.innerHTML).toEqual(
    `<a href="https://www.americanpublicmedia.org/apm-research-lab-finds-37-percent-of-americans-more-likely-to-view-minneapolis-as-a-desirable-destination-following-super-bowl-lii-coverage/" title="title" class="default">READ THE PRESS RELEASE</a>`
  );
});
