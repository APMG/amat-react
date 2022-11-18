export const html = {
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

export const iframe = {
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
        '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcameronofthemountains%2Fposts%2F483103422464792&width=500" width="500" height="701" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="encrypted-media"></iframe>'
    },
    type: 'apm_custom_html'
  },
  overrides: {}
};

export const script = {
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

export const scriptNoFallback = {
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

export const scriptBadFallback = {
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
