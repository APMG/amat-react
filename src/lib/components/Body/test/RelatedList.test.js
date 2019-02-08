import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "react-testing-library";
import Body from "../Body";
import { singleLineString } from "../../../utils/Utils";

afterEach(cleanup);

const RelatedLink = {
  attrs: {
    prefix: "More about",
    title: "Bears",
    url: "http://mnzoo.org/blog/animals/brown-bear/"
  },
  type: "apm_related_link"
};

const Doc = {
  type: "doc",
  version: 1,
  content: [
    {
      attrs: {
        title: "This is some other cool stuff"
      },
      content: [
        {
          attrs: {
            prefix: "More about",
            title: "Bears",
            url: "http://mnzoo.org/blog/animals/brown-bear/"
          },
          type: "apm_related_link"
        }
      ],
      type: "apm_related_list"
    }
  ]
};

test("It renders a link in a paragraph", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Body nodeData={Doc} />, container);
  const expected = `<div class="apm-related-list">
          <div class="apm-related-list-title">This is some other cool stuff</div>
          <ul class="apm-related-list-body">
            <li class="apm-related-link">
              <div class="apm-related-link">
                <a href="http://mnzoo.org/blog/animals/brown-bear/"><span class="apm-related-link-prefix">More about</span>Bears</a>
              </div>
            </li>
          </ul>
        </div>`;

  expect(container.innerHTML).toEqual(singleLineString(expected));
});
