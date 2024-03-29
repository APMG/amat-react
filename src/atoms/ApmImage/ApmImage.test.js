import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from '../../components/Body/Body';
import { singleLineString } from '../../utils/utils';
import docWithImage from '../../fixtures/docWithImage.json';
import complexDocWithImageCredit from '../../fixtures/complexDocWithImageCredit.json';
import embedded from '../../fixtures/embedded.json';

afterEach(cleanup);

test('It renders a figure & picture tag', () => {
  const { container } = render(
    <Body nodeData={docWithImage} embedded={embedded} />
  );

  const expected =
    '<figure class="figure figure-left figure-half"><picture class="" data-testid="picture"><source type="image/jpeg" srcset="https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/4a6fe7-2019-03-pic.jpg 400w,https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/9e83b3-2019-03-pic.jpg 600w,https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/54fe69-2019-03-pic.jpg 1000w,https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/203da4-2019-03-pic.jpg 1226w" sizes="(max-width: 47.999em) 99vw, 66vw" data-testid="notwebp"><img src="https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/uncropped/f9365d-2019-03-pic.jpg" alt="A Picture"></picture><figcaption class="figure_caption"><div class="figure_text">A Picture</div><div class="figure_credit">Walsh, Andrew</div></figcaption></figure>';
  expect(container.innerHTML).toEqual(singleLineString(expected));
});

test('It renders amp-img when required', () => {
  const { container } = render(
    <Body nodeData={docWithImage} embedded={embedded} isAmp={true} />
  );

  const expected =
    '<figure class="figure figure-left figure-half"><amp-img style="max-width: 100%;" class="" src="https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/uncropped/f9365d-2019-03-pic.jpg" alt="A Picture" srcset="https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/4a6fe7-2019-03-pic.jpg 400w,https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/9e83b3-2019-03-pic.jpg 600w,https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/54fe69-2019-03-pic.jpg 1000w,https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/203da4-2019-03-pic.jpg 1226w" sizes="(max-width: 47.999em) 99vw, 66vw" height="500" width="400" layout="responsive"></amp-img><figcaption class="figure_caption"><div class="figure_text">A Picture</div><div class="figure_credit">Walsh, Andrew</div></figcaption></figure>';

  expect(container.innerHTML).toEqual(singleLineString(expected));
});

test('It renders the image credit', () => {
  const { body, embeddedAssetJson } = complexDocWithImageCredit.data.story;
  const { container } = render(
    <Body
      nodeData={JSON.parse(body)}
      embedded={JSON.parse(embeddedAssetJson)}
    />
  );

  expect(container.innerHTML).toContain('Christine T. Nguyen | MPR News');
});
