import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from 'react-testing-library';
import Break from '../Break';

afterEach(cleanup);

test('It renders an html break element', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Break />, container);
  expect(container.firstChild.tagName).toEqual('BR');
  expect(container.innerHTML).toEqual('<br>');
});
