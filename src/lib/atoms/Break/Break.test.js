import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Break from './Break';

afterEach(cleanup);

test('It renders an html break element', () => {
  const { container } = render(<Break />);

  expect(container.firstChild.tagName).toEqual('BR');
  expect(container.innerHTML).toEqual('<br>');
});
