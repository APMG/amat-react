import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CustomHtml from './CustomHtml';
import recaptcha from './testdata/propublica.json';
import {
  html,
  iframe,
  script,
  scriptNoFallback,
  scriptBadFallback
} from './testdata/fixtures';

afterEach(cleanup);

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

test('Renders a fallback script', () => {
  const { container } = render(
    <CustomHtml
      embedded={script.embedded}
      nodeData={script.nodeData}
      minimal={script.minimal}
      type={script.type}
    />
  );

  expect(container.firstChild.innerHTML).toMatch(/<\/script>$/);
  expect(container.querySelectorAll('script').length).toEqual(1);
  expect(container.querySelectorAll('iframe').length).toEqual(0);
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

  expect(container.firstChild.innerHTML).toMatch(/<\/script>$/);
  expect(container.querySelectorAll('script').length).toEqual(1);
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

  expect(container.firstChild.innerHTML).toMatch(/<\/script>$/);
  expect(container.querySelectorAll('script').length).toEqual(1);
});

test('Allows a google recaptcha', () => {
  const doc = JSON.parse(recaptcha.body);
  script.nodeData.attrs.html = doc.content[0].attrs.html;
  script.nodeData.attrs.fallback_url =
    'https://www.google.com/recaptcha/api.js';
  const { container } = render(
    <CustomHtml
      embedded={script.embedded}
      nodeData={script.nodeData}
      minimal={script.minimal}
      type={script.type}
    />
  );
  expect(container.firstChild.innerHTML).toMatch(/<\/script>$/);
  expect(container.querySelectorAll('script').length).toEqual(1);
});

test('Allows a propublica script', () => {
  const html = `<p>This has stuff from propublica</p><script type="text/javascript" src="https://pixel.propublica.org/pixel.js" async="true"></script>`;
  script.nodeData.attrs.html = html;
  script.nodeData.attrs.fallback_url = 'https://pixel.propublica.org/pixel.js';
  const { container } = render(
    <CustomHtml
      embedded={script.embedded}
      nodeData={script.nodeData}
      minimal={script.minimal}
      type={script.type}
    />
  );
  expect(container.firstChild.innerHTML).toMatch(/<\/script>$/);
  expect(container.querySelectorAll('script').length).toEqual(1);
});

test('Allows embarassing, nasty, nasty javascript', () => {
  const html = `<p>This is really, really nasty.</p><script type="text/javascript">
        function ready(fn) {
            if (document.readyState != 'loading') {
                fn();
            } else {
                document.addEventListener('DOMContentLoaded', fn);
            }
        }

        function setPageLanguage() {
            var lang = window.location.href.match(/&lang=([a-zA-Z]*?)&?/);

            if (lang) {
                document.getElementsByTagName('html')[0].setAttribute('lang', lang[1]);
            }

        }

        function computeEmbedPath() {
            var trim_point = window.location.href.indexOf('embed/index.html');
            if (trim_point > 0) {
                return window.location.href.substring(0, trim_point); // supports https access via https://s3.amazonaws.com/cdn.knightlab.com/libs/timeline/latest/embed/index.html
            }
            return "https://cdn.knightlab.com/libs/timeline3/latest/";
        }

        function addOembedTag() {
            // it's not clear that any tools execute this JS to get the URL, but maybe?
            var oembed_link = document.createElement('link');
            oembed_link['rel'] = 'alternate';
            oembed_link['type'] = 'application/json+oembed';
            oembed_link['href'] = 'https://oembed.knightlab.com/timeline/?url=' + encodeURIComponent(window.location.href);
            document.head.appendChild(oembed_link);
        }

        function createEmbedDiv(containerId, width, height) {

            if (typeof(width) != 'string' && typeof(width) != 'number') {
                width = '100%'
            }

            if (typeof(height) != 'string' && typeof(height) != 'number') {
                height = '100%'
            }

            // default containerId would be 'timeline-embed'
            t = document.createElement('div');
            t.style.position = 'relative';

            te = document.getElementById(containerId);
            te.appendChild(t);
            te.classList.add("tl-timeline-embed");

            if (width.toString().match("%")) {
                te.style.width = width.split("%")[0] + "%";
            } else {
                width = Number(width) - 2;
                te.style.width = (width) + 'px';
            }

            if (height.toString().match("%")) {
                te.style.height = height;
                te.classList.add("tl-timeline-full-embed");
            } else if (width.toString().match("%")) {
                te.classList.add("tl-timeline-full-embed");
                height = Number(height) - 16;
                te.style.height = (height) + 'px';
            } else {
                height = height - 16;
                te.style.height = (height) + 'px';
            }
        }

        /**
         * Parse all URL parameters as possible Timeline options.
         * Timeline itself will use or ignore these based on actual
         * supported options.
         */
        function optionsFromUrlParams() {
            var param_str = window.location.href.slice(window.location.href.indexOf('?') + 1);

            if (param_str.match('#')) {
                param_str = param_str.split('#')[0];
            }

            param_str = param_str.split('&');

            var url_vars = {}

            for (var i = 0; i < param_str.length; i++) {
                var uv = param_str[i].split('=');
                url_vars[uv[0]] = uv[1];
            }

            return url_vars;
        };

        ready(function() {
            setPageLanguage();
            var embed_path = computeEmbedPath();
            addOembedTag();

            var options = optionsFromUrlParams();
            createEmbedDiv('timeline-embed', options.width, options.height);
            // ga_property_id is not something we let users override
            options.ga_property_id = 'UA-27829802-4';
            if (typeof(options.source) == 'undefined') {
                options.source = '1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk' // women in computing
            }

            options.soundcite = true;

            window.options = options
            window.timeline = new TL.Timeline('timeline-embed', options.source, options)

        })
    </script>`;
  script.nodeData.attrs.html = html;
  script.nodeData.attrs.fallback_url =
    'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1y3DK1oLxQmvMpRC6GIla5ifHrG50QRz4BTRAwV_-oeA&font=Fjalla-Average&lang=en&initial_zoom=3&height=650';
  const { container } = render(
    <CustomHtml
      embedded={script.embedded}
      nodeData={script.nodeData}
      minimal={script.minimal}
      type={script.type}
    />
  );
  expect(container.firstChild.innerHTML).toMatch(/<\/script>$/);
  expect(container.querySelectorAll('script').length).toEqual(1);
});
