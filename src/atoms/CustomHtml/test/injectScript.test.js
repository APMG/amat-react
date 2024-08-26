import { injectScript } from '../helper/injectScript';

describe('injectScript', () => {
  let node;
  let script;

  beforeEach(() => {
    node = document.createElement('div');
    script = document.createElement('script');
  });

  test('should inject a script tag with the correct attributes', () => {
    script.dataset.testKey = 'testValue';
    script.src = 'https://example.com/test.js';
    const id = 'testId';

    injectScript(node, script, id);

    const injectedScript = node.querySelector('script');
    expect(injectedScript).not.toBeNull();
    expect(injectedScript.getAttribute('data-test-key')).toBe('testValue');
    expect(injectedScript.src).toBe('https://example.com/test.js');
    expect(injectedScript.id).toBe(id);
  });

  test('should inject a script tag with innerHTML if src is not provided', () => {
    script.innerHTML = 'console.log("Test injectScript");';
    const id = 'testId';

    injectScript(node, script, id);

    const injectedScript = node.querySelector('script');
    expect(injectedScript).not.toBeNull();
    expect(injectedScript.innerHTML).toBe('console.log("Test injectScript");');
    expect(injectedScript.id).toBe(id);
  });
});
