import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from 'react-testing-library';
import Body from '../Body';
import gallery from './fixtures/gallery.json';

afterEach(cleanup);

test('It renders a gallery', () => {
  const container = document.createElement('div');
  ReactDOM.render(
    <Body nodeData={gallery.nodeData} embedded={gallery.embedded} />,
    container
  );
  expect(container.innerHTML).toContain(
    '<div class="apm-gallery-title">This is a Gallery</div>'
  );
  expect(container.innerHTML).toContain(
    '<li class="apm-slide"><figure class="figure figure-none figure-full"><img class="" src="https://img.apmcdn.org/dev/370f3fd6cf05f715d893d9fe9d3551a79b9fdfae/uncropped/a01566-2019-02-mug-shots.jpg" alt="Mug-Shots.jpg" srcset="https://img.apmcdn.org/dev/370f3fd6cf05f715d893d9fe9d3551a79b9fdfae/uncropped/cc1931-2019-02-mug-shots.jpg 400w,https://img.apmcdn.org/dev/370f3fd6cf05f715d893d9fe9d3551a79b9fdfae/uncropped/a01566-2019-02-mug-shots.jpg 600w,https://img.apmcdn.org/dev/370f3fd6cf05f715d893d9fe9d3551a79b9fdfae/uncropped/8f0ef6-2019-02-mug-shots.jpg 1000w,https://img.apmcdn.org/dev/370f3fd6cf05f715d893d9fe9d3551a79b9fdfae/uncropped/6aac6e-2019-02-mug-shots.jpg 1289w" sizes="(max-width: 47.999em) 99vw, 66vw"><figcaption class="figure_caption"><div class="figure_text">These are the mugs pics we were supposed to post to yesterday\'s show page.</div><div class="figure_credit">Walsh, Andrew</div></figcaption></figure></li>'
  );
  expect(container.innerHTML).toContain(
    '<li class="apm-slide"><figure class="figure figure-none figure-full"><img class="" src="https://img.apmcdn.org/dev/efb17e16803c0ac6945cae3fc3293be79662643a/uncropped/56d523-2019-02-show-pic-shelves.jpg" alt="Show-Pic-Shelves.jpg" srcset="https://img.apmcdn.org/dev/efb17e16803c0ac6945cae3fc3293be79662643a/uncropped/c1aa8d-2019-02-show-pic-shelves.jpg 400w,https://img.apmcdn.org/dev/efb17e16803c0ac6945cae3fc3293be79662643a/uncropped/56d523-2019-02-show-pic-shelves.jpg 585w" sizes="(max-width: 47.999em) 99vw, 66vw"><figcaption class="figure_caption"><div class="figure_text">Show-Pic-Shelves.jpg</div><div class="figure_credit">Walsh, Andrew</div></figcaption></figure></li>'
  );
});
