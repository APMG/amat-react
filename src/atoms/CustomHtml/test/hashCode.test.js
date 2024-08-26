import { hashCode } from '../helper/hashCode';

describe('hashCode', () => {
  test('should return the correct hash code for a string', () => {
    const string = 'test test test';
    const hash = hashCode(string);
    expect(hash).toBe(1712562099);
  });

  test('should return 5381 for an empty string', () => {
    const string = '';
    const hash = hashCode(string);
    expect(hash).toBe(5381);
  });

  test('should return different hash codes for different strings', () => {
    const string1 = 'Hello, world!';
    const string2 = 'Goodbye, world!';
    const hash1 = hashCode(string1);
    const hash2 = hashCode(string2);
    expect(hash1).not.toBe(hash2);
  });
});
