export const recaptcha = (ele) => {
  if (ele.current && ele.querySelector('form')) {
    const script = document.createElement('script');
    const inlineScript = document.createTextNode(
      "function enableSubmit() { const subButton = document.getElementById('submitButton'); if (subButton) subButton.disabled = false; };"
    );
    script.appendChild(inlineScript);
    document.head.appendChild(script);
  }
};
