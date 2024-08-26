import { htmlStringToElement } from '../helper/htmlStringToElement';

describe('htmlStringToElement', () => {
  test('should return a div element with the correct innerHTML', () => {
    const html = '<p>testing</p>';
    const element = htmlStringToElement(html);
    expect(element.innerHTML).toBe(html);
  });

  test('should return a div element even if the HTML string is empty', () => {
    const html = '';
    const element = htmlStringToElement(html);
    expect(element.innerHTML).toBe(html);
  });
});
