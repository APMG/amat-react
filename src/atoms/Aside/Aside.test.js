import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';

afterEach(cleanup);

const doc = {
  type: 'doc',
  version: 1,
  content: [
    {
      type: 'aside',
      content: [
        {
          content: [
            {
              text: 'An aside.',
              type: 'text'
            }
          ],
          type: 'paragraph'
        }
      ]
    }
  ]
};

test('It renders a body from a Prosemirror doc', () => {
  const { container } = render(<Body nodeData={doc} />);

  expect(container.innerHTML).toEqual(`<style>
          .apm-aside-custom {
            float: right;
            width: 300px;
            margin: 0 0 20px 20px;
            padding: 0px 15px;
            background-color: #f8f9fa;
            color: #000;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            line-height: 1.4;
          }

          .apm-aside-custom p {
            font-size: 13px;
          }
          
          @media (max-width: 957px) {
            .apm-aside-custom {
              float: none;
              width: 100%;
              margin: 20px 0;
            }
          }
        </style><aside class="apm-aside-custom"><p>An aside.</p></aside>`);
});
