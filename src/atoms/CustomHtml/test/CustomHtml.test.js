import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CustomHtml from '../CustomHtml';

afterEach(cleanup);

const html = {
  minimal: false,
  nodeData: {
    attrs: {
      fallback_text: 'basic',
      fallback_url: '',
      html: '<h1>Hello, world!</h1>'
    },
    type: 'apm_custom_html'
  }
};

const tikTok = {
  nodeData: {
    attrs: {
      fallback_text: 'basic',
      fallback_url: '',
      html: `<blockquote class=\"tiktok-embed\" cite=\"https://www.tiktok.com/@durry.music/video/7015774637250366726\" data-video-id=\"7015774637250366726\" style=\"max-width: 605px;min-width: 325px;\"> <section> <a target=\"_blank\" title=\"@durry.music\" href=\"https://www.tiktok.com/@durry.music?refer=embed\">@durry.music</a> <p>We made a lil diy music video in our garage for our new track! Go give it a watch on our YouTube channel, and hey maybe a sub while you’re there??</p> <a target=\"_blank\" title=\"♬ Who's Laughing Now - LC Version - Durry\" href=\"https://www.tiktok.com/music/Who's-Laughing-Now-LC-Version-7013218239777867778?refer=embed\">♬ Who's Laughing Now - LC Version - Durry</a></section></blockquote>`
    },
    type: 'apm_custom_html'
  }
};

const iframe = {
  minimal: false,
  nodeData: {
    attrs: {
      fallback_text: 'iframe',
      fallback_url: '',
      html:
        '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcameronofthemountains%2Fposts%2F483103422464792&width=500" width="500" height="701" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="encrypted-media"></iframe>'
    },
    type: 'apm_custom_html'
  }
};

const script = {
  minimal: false,
  nodeData: {
    attrs: {
      fallback_text: 'script',
      fallback_url: 'https://mprnews.typeform.com/to/y5uiHF',
      html:
        '<div class="typeform-widget" data-url="https://mprnews.typeform.com/to/y5uiHF" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=y5uiHF&utm_source=typeform.com-13901520-ProPlus3&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>'
    },
    type: 'apm_custom_html'
  }
};

const scriptNoFallback = {
  minimal: false,
  nodeData: {
    attrs: {
      fallback_text: 'badScript',
      fallback_url: '',
      html:
        '<div class="typeform-widget" data-url="https://mprnews.typeform.com/to/y5uiHF" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=y5uiHF&utm_source=typeform.com-13901520-ProPlus3&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>'
    },
    type: 'apm_custom_html'
  }
};

const scriptBadFallback = {
  minimal: false,
  nodeData: {
    attrs: {
      fallback_text: 'badScript',
      fallback_url: 'http://www.downloadmehehehe.virus',
      html:
        '<div class="typeform-widget" data-url="https://mprnews.typeform.com/to/y5uiHF" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=y5uiHF&utm_source=typeform.com-13901520-ProPlus3&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>'
    },
    type: 'apm_custom_html'
  }
};

const scriptNoFallbackNoDataUrl = {
  nodeData: {
    attrs: {
      fallback_text: '',
      fallback_url: '',
      html:
        '<div style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=y5uiHF&utm_source=typeform.com-13901520-ProPlus3&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>'
    },
    type: 'apm_custom_html'
  }
};

const form = {
  minimal: false,
  nodeData: {
    attrs: {
      fallback_text: '',
      fallback_url: '',
      html:
        '<form method="post" action="https://mcpostman.publicradio.org/subscription_requests_plus" id="form1037" class="elq-form mcpostman-form"> </form>'
    },
    type: 'apm_custom_html'
  }
};

describe('CustomHTML Test: ', () => {
  test('Renders basic HTML body', () => {
    html.nodeData.attrs.html = '<h1>Hello, world!</h1>';
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

  describe('Test Condition: Renders fallback script in an iframe', () => {
    test('If script Not source present, but fallback url and typeform-widget class with data-url present, then use fallback url for the src ', () => {
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
    });

    test('If script Not source present, but fallback url and typeform-widget class with data-url present, then use fallback url for the src ', () => {
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
    });

    test('If script source Not present, no fallback url, but has typeform-widget class with data-url present, then use data-url', () => {
      const { container } = render(
        <CustomHtml
          embedded={scriptNoFallback.embedded}
          nodeData={scriptNoFallback.nodeData}
          minimal={scriptNoFallback.minimal}
          type={scriptNoFallback.type}
        />
      );

      expect(container.firstChild.innerHTML).toEqual(
        '<iframe width="100%" height="500px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://mprnews.typeform.com/to/y5uiHF"><div class="typeform-widget" data-url="https://mprnews.typeform.com/to/y5uiHF" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=y5uiHF&amp;utm_source=typeform.com-13901520-ProPlus3&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-poweredbytypeform&amp;utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div></iframe>'
      );
      expect(container.querySelectorAll('iframe').length).toEqual(1);
    });

    test('If script source Not present, but fallback url and typeform-widget class with data-url present, then use data-url instead of fallback url', () => {
      const { container } = render(
        <CustomHtml
          embedded={scriptBadFallback.embedded}
          nodeData={scriptBadFallback.nodeData}
          minimal={scriptBadFallback.minimal}
          type={scriptBadFallback.type}
        />
      );

      const iframeElement = container.firstChild;
      expect(iframeElement.tagName).toEqual('DIV');
      const expectedInnerHTML = `<iframe width=\"100%\" height=\"500px\" frameborder=\"0\" scrolling=\"yes\" marginheight=\"0\" marginwidth=\"0\" src=\"https://mprnews.typeform.com/to/y5uiHF\"><div class=\"typeform-widget\" data-url=\"https://mprnews.typeform.com/to/y5uiHF\" style=\"width: 100%; height: 500px;\"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id=\"typef_orm\", b=\"https://embed.typeform.com/\"; if(!gi.call(d,id)) { js=ce.call(d,\"script\"); js.id=id; js.src=b+\"embed.js\"; q=gt.call(d,\"script\")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style=\"font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;\"> powered by <a href=\"https://admin.typeform.com/signup?utm_campaign=y5uiHF&amp;utm_source=typeform.com-13901520-ProPlus3&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-poweredbytypeform&amp;utm_term=EN\" style=\"color: #999\" target=\"_blank\">Typeform</a> </div></iframe>`;
      expect(iframeElement.innerHTML).toEqual(expectedInnerHTML);
    });

    test('If script source Not present, no fallback url and typeform-widget class with no data-url present, then wrapped iframe and src defaults to "about:blank"', () => {
      const { container } = render(
        <CustomHtml
          embedded={scriptNoFallbackNoDataUrl.embedded}
          nodeData={scriptNoFallbackNoDataUrl.nodeData}
          minimal={scriptNoFallbackNoDataUrl.minimal}
          type={scriptNoFallbackNoDataUrl.type}
        />
      );

      const iframeElement = container.firstChild;
      expect(iframeElement.tagName).toEqual('DIV');
      const expectedInnerHTML = `<iframe width=\"100%\" height=\"500px\" frameborder=\"0\" scrolling=\"yes\" marginheight=\"0\" marginwidth=\"0\" src=\"about:blank\"><div style=\"width: 100%; height: 500px;\"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id=\"typef_orm\", b=\"https://embed.typeform.com/\"; if(!gi.call(d,id)) { js=ce.call(d,\"script\"); js.id=id; js.src=b+\"embed.js\"; q=gt.call(d,\"script\")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style=\"font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;\"> powered by <a href=\"https://admin.typeform.com/signup?utm_campaign=y5uiHF&amp;utm_source=typeform.com-13901520-ProPlus3&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-poweredbytypeform&amp;utm_term=EN\" style=\"color: #999\" target=\"_blank\">Typeform</a> </div></iframe>`;
      expect(iframeElement.innerHTML).toEqual(expectedInnerHTML);
    });
  });

  describe('Test Condition: iframe', () => {
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
        '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcameronofthemountains%2Fposts%2F483103422464792&amp;width=500" width="500" height="701" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="encrypted-media"></iframe>'
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
  });

  describe('Test Condition: tikTok-embeds', () => {
    test('tikTok embed', () => {
      const { container } = render(
        <CustomHtml
          embedded={html.embedded}
          nodeData={tikTok.nodeData}
          minimal={html.minimal}
          type={html.type}
        />
      );
      const expectedInnerHTML = `<blockquote class=\"tiktok-embed\" cite=\"https://www.tiktok.com/@durry.music/video/7015774637250366726\" data-video-id=\"7015774637250366726\" style=\"max-width: 605px;min-width: 325px;\"> <section> <a target=\"_blank\" title=\"@durry.music\" href=\"https://www.tiktok.com/@durry.music?refer=embed\">@durry.music</a> <p>We made a lil diy music video in our garage for our new track! Go give it a watch on our YouTube channel, and hey maybe a sub while you’re there??</p> <a target=\"_blank\" title=\"♬ Who's Laughing Now - LC Version - Durry\" href=\"https://www.tiktok.com/music/Who's-Laughing-Now-LC-Version-7013218239777867778?refer=embed\">♬ Who's Laughing Now - LC Version - Durry</a></section></blockquote>`;
      expect(container.firstChild.innerHTML).toMatch(/tiktok-embed/);
      expect(container.firstChild.innerHTML).toEqual(expectedInnerHTML);
    });
  });

  describe('Test Condition: forms', () => {
    test('Do not **** the bed if there is a script tag that does not have a parent elelment', () => {
      scriptBadFallback.nodeData.attrs.html = `<form action="https://mcpostman.publicradio.org/subscription_requests_plus" class="mcpostman-form" method="post">
  <input name="subscription_request[property_key]" type="hidden" value="8b4aeb98-1c49-4470-aa7c-2ae8374ea2fd" />
  <input name="subscription_request[sde_external_key]" type="hidden" value="Classical_Daily_Download_Game" />
  <input name="subscription_request[fsm][Form_BusinessUnit]" type="hidden" value="APM" />
  <input name="subscription_request[fsm][Form_FormName]" type="hidden" value="Classical_Daily_Download_Game_Form" />
  <input name="subscription_request[fsm][Form_Opt_In_Source]" type="hidden" value="APM_Classical_Engagement" />
  <div class="form-group">
    <label style="color:black" for="subscription_request_sde_fsm_Form_FirstName">First Name<span style="color:red" class="required-marker">*</span></label>
    <input type="text" name="subscription_request[sde_fsm][Form_FirstName]" id="subscription_request_sde_fsm_Form_FirstName" required="required" maxlength="40" class="form-control" />
  </div><br>
  <div class="form-group">
    <label style="color:black" for="subscription_request_sde_fsm_Form_LastName">Last Name<span style="color:red" class="required-marker">*</span></label>
    <input type="text" name="subscription_request[sde_fsm][Form_LastName]" id="subscription_request_sde_fsm_Form_LastName" required="required" maxlength="80" class="form-control" />
  </div><br>
  <div class="form-group">
    <label style="color:black" for="subscription_request_sde_fsm_Form_Email_Address">Email Address<span style="color:red" class="required-marker">*</span></label>
    <input type="email" name="subscription_request[sde_fsm][Form_Email_Address]" id="subscription_request_sde_fsm_Form_Email_Address" required="required" maxlength="254" class="form-control" />
  </div><br>
  <div class="form-group">
    <label style="color:black" for="subscription_request_sde_fsm_Form_PostalCode">Postal Code<span style="color:red" class="required-marker">*</span></label>
    <input type="text" name="subscription_request[sde_fsm][Form_PostalCode]" id="subscription_request_sde_fsm_Form_PostalCode" required="required" maxlength="20" class="form-control" />
  </div><br>
  <div class="long-group">
    <label style="color:black" for="subscription_request_sde_Form_Message">What's your guess for this week's theme?<span style="color:red" class="required-marker">*</span></label><br>
    <input type="text" name="subscription_request[sde][Form_Message]" id="subscription_request_sde_Form_Message" required="required" maxlength="100" class="form-control" />
  </div><br>
  <div class="checkbox">
    <label style="color:black" for="subscription_request_publication_lists_1036">
      <input id="subscription_request_publication_lists_1036" name="subscription_request[publication_lists][1036]" type="checkbox" />
   Subscribe to the weekday Daily Download newsletter for free MP3s of handpicked classical works and giveaways.
    </label>
  </div><br><div class="g-recaptcha" data-sitekey="6Lcot4kUAAAAAOPLJE2ikJTVcq50pQgSqEkBzAYb"></div>
  <script src="https://www.google.com/recaptcha/api.js"></script>
<br>
  <button style="background-color: #425382;
  padding: .5em;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 6px;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
                border: none;" class="button" type="submit">Submit</button>
</form>`;

      const { container } = render(
        <CustomHtml
          embedded={scriptBadFallback.embedded}
          nodeData={scriptBadFallback.nodeData}
          minimal={scriptBadFallback.minimal}
          type={scriptBadFallback.type}
        />
      );

      const formElement = container.querySelector('form');
      expect(formElement).toBeTruthy();
      expect(container.firstChild.innerHTML).toMatch(
        /mcpostman\.publicradio\.org/
      );
    });
  });

  test('Render form', () => {
    const { container } = render(
      <CustomHtml
        embedded={html.embedded}
        nodeData={form.nodeData}
        minimal={html.minimal}
        type={html.type}
      />
    );

    expect(container.firstChild.innerHTML).toEqual(
      '<form method="post" action="https://mcpostman.publicradio.org/subscription_requests_plus" id="form1037" class="elq-form mcpostman-form"> </form>'
    );
    expect(container.querySelectorAll('script').length).toEqual(0);
  });
});
