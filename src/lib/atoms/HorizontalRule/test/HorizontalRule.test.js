import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from 'react-testing-library';
import HorizontalRule from '../HorizontalRule';

afterEach(cleanup);

test('It renders an html hr element', () => {
  const container = document.createElement('div');
  ReactDOM.render(<HorizontalRule />, container);
  expect(container.firstChild.tagName).toEqual('HR');
  expect(container.innerHTML).toEqual('<hr>');
});
