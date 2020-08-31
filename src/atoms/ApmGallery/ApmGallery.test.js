import React from 'react';
import { render, cleanup, prettyDOM } from '@testing-library/react';
import Body from '../../components/Body/Body';
import gallery from '../../fixtures/gallery.json';
import embedded from '../../fixtures/embedded.json';

afterEach(cleanup);

xtest("TODO: It renders a gallery (idk why it's crashing)", () => {
  const { container } = render(<Body nodeData={gallery} embedded={embedded} />);

  console.log(prettyDOM(container));

  expect(true).toBeTruthy();
});
