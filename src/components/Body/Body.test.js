import React from 'react';
import PropTypes from 'prop-types';
import { render, cleanup } from '@testing-library/react';
import Body from './Body';
import { jsonObj, embeddedObj } from './fixtures/TraverseError';

afterEach(cleanup);

test('First it renders a link from a prosemirror doc ', () => {
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
test('First it renders a link from a prosemirror paragraph', () => {
  const doc = {
    type: 'paragraph',
    content: [
      {
        text: 'Tell us about your special person!',
        type: 'text',
        marks: [
          {
            type: 'link',
            attrs: {
              href: 'https://mpr.tfaforms.net/89',
              title: '',
              className: 'default'
            }
          }
        ]
      }
    ]
  };
  const { container } = render(<Body nodeData={doc} />);

  expect(container.innerHTML).toEqual(
    '<a href="https://mpr.tfaforms.net/89" class="default">Tell us about your special person!</a>'
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

test('It renders a link from a prosemirror doc using an alternate component when it is embedded in a paragraph', () => {
  const doc = {
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: 'Toccata in A',
            marks: [
              {
                type: 'link',
                attrs: {
                  href:
                    'http://ks4.imslp.info/files/imglnks/usimg/d/d1/IMSLP293804-PMLP476645-Kuhnau_Toccata_A_Fassung_G.pdf'
                }
              }
            ]
          }
        ]
      }
    ],
    type: 'doc'
  };
  const { container } = render(
    <Body nodeData={doc} overrides={{ link: LinkNewWindow }} />
  );

  expect(container.innerHTML).toEqual(
    '<p><a href="http://ks4.imslp.info/files/imglnks/usimg/d/d1/IMSLP293804-PMLP476645-Kuhnau_Toccata_A_Fassung_G.pdf" target="_blank">Toccata in A</a></p>'
  );
});

test('it renders a nil doc', () => {
  const doc = null;
  const { container } = render(<Body nodeData={doc} />);

  expect(container.innerHTML).toEqual('');
});

test('it renders a doc that was throwing an error in Traverse', () => {
  const { container } = render(
    <Body nodeData={jsonObj} embedded={embeddedObj} isAmp={true} />
  );

  expect(container.innerHTML).toContain(
    'achievement barriers around education; pulling up businesses that'
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
