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
    '<div class="slideshow_item" style="opacity: 1;"><div class="slideshow_slide"><div class="slideshow_count">1 of 2</div>'
  );

  expect(container.innerHTML).toContain(
    '<figure class="slideshow_figure"><div class="css-qrkzib-Slide-Slide ej6e7930"><img class="slideshow_image" alt="Mug-Shots.jpg"></div><figcaption class="slideshow_caption"><div class="slideshow_credit"><a class="slideshow_creditLink" href="https://www.mprnews.org">Walsh, Andrew</a></div>These are the mugs pics we were supposed to post to yesterdays show page.</figcaption></figure>'
  );
});
