import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const embedded = {
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

const doc = {
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
  const { container } = render(<Body nodeData={doc} embedded={embedded} />);

  expect(container.innerHTML).toEqual(
    `<a class="amat-apm-attachment application-pdf" href="https://files.apmcdn.org/production/bc3ff968c30836f15c7a6df150aaa5f6.pdf">Bingo Card 1</a>`
  );
});

test('It can handle no match for attachment', () => {
  embedded.attachments[0].id = 'zzzzzzzzzzzzzzzzZZZ'
  const { container } = render(<Body nodeData={doc} embedded={embedded} />);

  expect(container.innerHTML).toEqual(
   "" 
  );
});
