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
    '<div class="apm-gallery"><div class="apm-gallery_title">This is a Gallery</div><div class="apm-gallery_slides"><div class="slideshow"><button data-testid="prev-button" class="slideshow_button slideshow_button-prev"><svg class="icon icon-chevronLeft slideshow_icon" width="35" height="35" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M48.2 47.4L30 47.4C28.9 47.4 28 46.5 28 45.4L28 44.3C28 43.2 28.9 42.3 30 42.3L46.2 42.3 46.2 26.1C46.2 25 47.1 24.1 48.2 24.1L49.4 24.1C50.5 24.1 51.4 25 51.4 26.1L51.4 45.4C51.4 46.5 50.5 47.4 49.4 47.4L48.2 47.4Z" fill="#FFFFFF" transform="translate(21, 18) rotate(135) translate(-39.7, -35.8)"></path></g></svg><span class="invisible">Previous Slide</span></button><div class="slideshow_container"><div class="slideshow_item" style="opacity: 1; transform: none;"><figure class="slideshow_figure"><img class="slideshow_image" alt="Mug-Shots.jpg" srcset="https://img.apmcdn.org/dev/370f3fd6cf05f715d893d9fe9d3551a79b9fdfae/widescreen/09f63e-2019-02-mug-shots.jpg 400w,https://img.apmcdn.org/dev/370f3fd6cf05f715d893d9fe9d3551a79b9fdfae/widescreen/b400ac-2019-02-mug-shots.jpg 600w,https://img.apmcdn.org/dev/370f3fd6cf05f715d893d9fe9d3551a79b9fdfae/widescreen/6e2652-2019-02-mug-shots.jpg 854w"><figcaption class="slideshow_caption"><div class="slideshow_credit"></div>These are the mugs pics we were supposed to post to yesterday\'s show page.<br><em>(1 of 2)</em></figcaption></figure></div><div class="slideshow_item" style="opacity: 0; transform: translateX(100px) translateZ(0);"><figure class="slideshow_figure"><img class="slideshow_image" alt="Show-Pic-Shelves.jpg" srcset="https://img.apmcdn.org/dev/efb17e16803c0ac6945cae3fc3293be79662643a/widescreen/ace769-2019-02-show-pic-shelves.jpg 400w,https://img.apmcdn.org/dev/efb17e16803c0ac6945cae3fc3293be79662643a/widescreen/015e08-2019-02-show-pic-shelves.jpg 600w"><figcaption class="slideshow_caption"><div class="slideshow_credit"></div>Show-Pic-Shelves.jpg<br><em>(2 of 2)</em></figcaption></figure></div></div><button data-testid="next-button" class="slideshow_button slideshow_button-next"><svg class="icon icon-chevronRight slideshow_icon" width="35" height="35" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M39.2 47.4L21 47.4C19.9 47.4 19 46.5 19 45.4L19 44.3C19 43.2 19.9 42.3 21 42.3L37.2 42.3 37.2 26.1C37.2 25 38.1 24.1 39.2 24.1L40.4 24.1C41.5 24.1 42.4 25 42.4 26.1L42.4 45.4C42.4 46.5 41.5 47.4 40.4 47.4L39.2 47.4Z" fill="#FFFFFF" transform="translate(12, 18) rotate(-45) translate(-30.7, -35.8) "></path></g></svg><span class="invisible">Next Slide</span></button></div></div></div>'
  );
});
