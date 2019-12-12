import React from 'react';
import PropTypes from 'prop-types';
import { render, cleanup } from '@testing-library/react';
import Body from './Body';

afterEach(cleanup);

test('It renders html from a prosemirror doc ', () => {
  const doc = {
    content: [
      {
        marks: [
          {
            attrs: {
              href: 'https://www.apple.com',
              title: null
            },
            type: 'link'
          }
        ],
        text: 'Jump',
        type: 'text'
      }
    ],
    type: 'doc'
  };
  const { container } = render(<Body nodeData={doc} />);

  expect(container.innerHTML).toEqual(
    '<a href="https://www.apple.com">Jump</a>'
  );
});

test('It renders a link from a prosemirror doc using an alternate component', () => {
  const doc = {
    content: [
      {
        marks: [
          {
            attrs: {
              href: 'https://www.apple.com',
              title: null
            },
            type: 'link'
          }
        ],
        text: 'Jump',
        type: 'text'
      }
    ],
    type: 'doc'
  };
  const { container } = render(
    <Body nodeData={doc} overrides={{ link: LinkNewWindow }} />
  );

  expect(container.innerHTML).toEqual(
    '<a href="https://www.apple.com" target="_blank">Jump</a>'
  );
});

const LinkNewWindow = (props) => {
  const { href, title, inner } = props;
  const attrs = title ? { href: href, title: title } : { href: href };
  return (
    <>
      <a {...attrs} target="_blank">
        {inner}
      </a>
    </>
  );
};

LinkNewWindow.propTypes = {
  inner: PropTypes.object,
  href: PropTypes.string,
  title: PropTypes.string
};
