import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';
import gallery from '../../fixtures/gallery.json';

afterEach(cleanup);

test('It renders a gallery', () => {
  const { container } = render(
    <Body nodeData={gallery.nodeData} embedded={gallery.embedded} />
  );

  expect(container.innerHTML).toContain(
    'https://img.apmcdn.org/dev/370f3fd6cf05f715d893d9fe9d3551a79b9fdfae/widescreen/6e2652-2019-02-mug-shots.jpg 854w'
  );
  expect(container.innerHTML).toContain('2 of 2');
});
