import { youtubeParser } from '../utils/utils';

describe('youtubeParser', () => {
  const youtubeLinks = {
    varOne:
      'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index',
    varTwo:
      'http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o',
    varThree:
      'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0',
    varFour: 'http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s',
    varFive: 'http://www.youtube.com/embed/0zM3nApSvMg?rel=0',
    varSix: 'http://www.youtube.com/watch?v=0zM3nApSvMg',
    varSeven: 'http://youtu.be/0zM3nApSvMg'
  };

  test('test: varOne - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varOne);
    expect(result).toEqual('0zM3nApSvMg');
  });
  test('test: varTwo - youtube video variation: should return youtube id: QdK8U-VIH_o', () => {
    const result = youtubeParser(youtubeLinks.varTwo);
    expect(result).toEqual('QdK8U-VIH_o');
  });
  test('test: varThree - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varThree);
    expect(result).toEqual('0zM3nApSvMg');
  });
  test('test: varFour - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varFour);
    expect(result).toEqual('0zM3nApSvMg');
  });
  test('test: varFive - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varFive);
    expect(result).toEqual('0zM3nApSvMg');
  });
  test('test: varSix - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varSix);
    expect(result).toEqual('0zM3nApSvMg');
  });
  test('test: varSeven - youtube video variation: should return youtube id: 0zM3nApSvMg', () => {
    const result = youtubeParser(youtubeLinks.varSeven);
    expect(result).toEqual('0zM3nApSvMg');
  });
});
