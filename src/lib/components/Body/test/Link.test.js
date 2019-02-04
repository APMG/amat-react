import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from 'react-testing-library';
import Body from '../Body';

afterEach(cleanup);

const Doc = {
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
  const container = document.createElement('div');
  const url =
    'https://www.americanpublicmedia.org/apm-research-lab-finds-37-percent-of-americans-more-likely-to-view-minneapolis-as-a-desirable-destination-following-super-bowl-lii-coverage/';
  ReactDOM.render(<Body nodeData={Doc} />, container);
  expect(container.firstChild.tagName).toEqual('P');
  expect(container.firstChild.innerHTML).toEqual(
    `<a href="${url}">READ THE PRESS RELEASE</a>`
  );
});
