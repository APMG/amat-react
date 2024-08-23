import { recaptcha } from '../helper/recaptcha';

describe('recaptcha', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.current = true;
    const form = document.createElement('form');
    element.appendChild(form);
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('should inject a script tag into the document head', () => {
    // Test checks if the function correctly injects a script tag into the document head when the element contains a form.
    recaptcha(element);

    const script = document.head.querySelector('script');
    expect(script).not.toBeNull();
    expect(script.textContent).toBe(
      "function enableSubmit() { const subButton = document.getElementById('submitButton'); if (subButton) subButton.disabled = false; };"
    );
  });
});
