import { isValidUrl } from '../helper/isValidUrl';

describe('isValidUrl', () => {
  test('should return true for a valid URL', () => {
    const url = 'https://www.mprnews.org';
    const isValid = isValidUrl(url);
    expect(isValid).toBe(true);
  });

  test('should return true for a valid localhost URL', () => {
    const url = 'http://localhost:3000';
    const isValid = isValidUrl(url);
    expect(isValid).toBe(true);
  });

  test('should return true for a valid IP address URL', () => {
    const url = 'http://192.168.1.1';
    const isValid = isValidUrl(url);
    expect(isValid).toBe(true);
  });

  test('should return false for an invalid URL', () => {
    const url = 'invalid url';
    const isValid = isValidUrl(url);
    expect(isValid).toBe(false);
  });

  test('should return true for a valid URL with path, query string, and fragment', () => {
    const url = 'https://www.example.com/path?query=string#fragment';
    const isValid = isValidUrl(url);
    expect(isValid).toBe(true);
  });
});
