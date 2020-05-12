import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CustomHtml from './CustomHtml';

afterEach(cleanup);

const html = {
  embedded: {
    attachments: [],
    audio: [],
    oembeds: [],
    images: []
  },
  minimal: false,
  nodeData: {
    attrs: {
      fallback_text: 'basic',
      fallback_url: '',
      html: '<h1>Hello, world!</h1>'
    },
    type: 'apm_custom_html'
  },
  overrides: {}
};

const iframe = {
  embedded: {
    attachments: [],
    audio: [],
    oembeds: [],
    images: []
  },
  minimal: false,
  nodeData: {
    attrs: {
      fallback_text: 'iframe',
      fallback_url: '',
      html:
        '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcameronofthemountains%2Fposts%2F483103422464792&width=500" width="500" height="701" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>'
    },
    type: 'apm_custom_html'
  },
  overrides: {}
};

const script = {
  embedded: {
    attachments: [],
    audio: [],
    oembeds: [],
    images: []
  },
  minimal: false,
  nodeData: {
    attrs: {
      fallback_text: 'script',
      fallback_url: 'https://mprnews.typeform.com/to/y5uiHF',
      html:
        '<div class="typeform-widget" data-url="https://mprnews.typeform.com/to/y5uiHF" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=y5uiHF&utm_source=typeform.com-13901520-ProPlus3&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>'
    },
    type: 'apm_custom_html'
  },
  overrides: {}
};

const scriptNoFallback = {
  embedded: {
    attachments: [],
    audio: [],
    oembeds: [],
    images: []
  },
  minimal: false,
  nodeData: {
    attrs: {
      fallback_text: 'badScript',
      fallback_url: '',
      html:
        '<div class="typeform-widget" data-url="https://mprnews.typeform.com/to/y5uiHF" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=y5uiHF&utm_source=typeform.com-13901520-ProPlus3&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>'
    },
    type: 'apm_custom_html'
  },
  overrides: {}
};

const scriptBadFallback = {
  embedded: {
    attachments: [],
    audio: [],
    oembeds: [],
    images: []
  },
  minimal: false,
  nodeData: {
    attrs: {
      fallback_text: 'badScript',
      fallback_url: 'http://www.downloadmehehehe.virus',
      html:
        '<div class="typeform-widget" data-url="https://mprnews.typeform.com/to/y5uiHF" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=y5uiHF&utm_source=typeform.com-13901520-ProPlus3&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>'
    },
    type: 'apm_custom_html'
  },
  overrides: {}
};

test('Renders basic HTML body', () => {
  const { container } = render(
    <CustomHtml
      embedded={html.embedded}
      nodeData={html.nodeData}
      minimal={html.minimal}
      type={html.type}
    />
  );

  expect(container.firstChild.innerHTML).toEqual('<h1>Hello, world!</h1>');
  expect(container.querySelectorAll('script').length).toEqual(0);
  expect(container.querySelectorAll('iframe').length).toEqual(0);
});

test('Renders defined iframe', () => {
  const { container } = render(
    <CustomHtml
      embedded={iframe.embedded}
      nodeData={iframe.nodeData}
      minimal={iframe.minimal}
      type={iframe.type}
    />
  );

  expect(container.firstChild.innerHTML).toEqual(
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcameronofthemountains%2Fposts%2F483103422464792&amp;width=500" width="500" height="701" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  );
  expect(container.querySelectorAll('script').length).toEqual(0);
  expect(container.querySelectorAll('iframe').length).toEqual(1);
});

test('Renders fallback script in an iframe', () => {
  const { container } = render(
    <CustomHtml
      embedded={script.embedded}
      nodeData={script.nodeData}
      minimal={script.minimal}
      type={script.type}
    />
  );

  expect(container.firstChild.innerHTML).toEqual(
    '<iframe width="100%" height="500px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://mprnews.typeform.com/to/y5uiHF"><div class="typeform-widget" data-url="https://mprnews.typeform.com/to/y5uiHF" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=y5uiHF&amp;utm_source=typeform.com-13901520-ProPlus3&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-poweredbytypeform&amp;utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div></iframe>'
  );
  expect(container.querySelectorAll('script').length).toEqual(0);
  expect(container.querySelectorAll('iframe').length).toEqual(1);
});

test('If no fallback src is provided, and there is an unsourced script, place it in an iframe', () => {
  const { container } = render(
    <CustomHtml
      embedded={scriptNoFallback.embedded}
      nodeData={scriptNoFallback.nodeData}
      minimal={scriptNoFallback.minimal}
      type={scriptNoFallback.type}
    />
  );

  expect(container.firstChild.innerHTML).toEqual(
    '<iframe width="100%" height="500px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src=""><div class="typeform-widget" data-url="https://mprnews.typeform.com/to/y5uiHF" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=y5uiHF&amp;utm_source=typeform.com-13901520-ProPlus3&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-poweredbytypeform&amp;utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div></iframe>'
  );
  expect(container.querySelectorAll('iframe').length).toEqual(1);
});

test('If the fallback src is not on our whitelist, and the script has no source, all html is placed in iframe', () => {
  const { container } = render(
    <CustomHtml
      embedded={scriptBadFallback.embedded}
      nodeData={scriptBadFallback.nodeData}
      minimal={scriptBadFallback.minimal}
      type={scriptBadFallback.type}
    />
  );

  expect(container.firstChild.innerHTML).toEqual(
    `<iframe width="100%" height="500px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src=""><div class="typeform-widget" data-url="https://mprnews.typeform.com/to/y5uiHF" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=y5uiHF&amp;utm_source=typeform.com-13901520-ProPlus3&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-poweredbytypeform&amp;utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div></iframe>`
  );
});
