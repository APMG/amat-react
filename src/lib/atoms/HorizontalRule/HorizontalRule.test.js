import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HorizontalRule from './HorizontalRule';

afterEach(cleanup);

test('It renders an html hr element', () => {
  const { container } = render(<HorizontalRule />);

  expect(container.firstChild.tagName).toEqual('HR');
  expect(container.innerHTML).toEqual('<hr>');
});
