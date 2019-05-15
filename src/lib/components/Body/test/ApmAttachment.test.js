import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from 'react-testing-library';
import Body from '../Body';

afterEach(cleanup);

const Embedded = {
  images: [],
  attachments: [
    {
      size: 84176,
      mime_type: 'application/pdf',
      id: '01D0YYD93DW5YAWEVYWMK59PDK',
      title: 'LFH Radio Bingo Card 1',
      publish_status: 'published',
      url:
        'https://files.apmcdn.org/production/bc3ff968c30836f15c7a6df150aaa5f6.pdf'
    }
  ]
};

const Doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'apm_attachment',
      attrs: {
        attachment_id: '01D0YYD93DW5YAWEVYWMK59PDK',
        title: 'Bingo Card 1'
      }
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const url =
    'https://files.apmcdn.org/production/bc3ff968c30836f15c7a6df150aaa5f6.pdf';
  const container = document.createElement('div');
  ReactDOM.render(<Body nodeData={Doc} embedded={Embedded} />, container);
  expect(container.innerHTML).toEqual(
    `<div class="amat-apm-attachment application-pdf"><a href="${url}">Bingo Card 1</a></div>`
  );
});
