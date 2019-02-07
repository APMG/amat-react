import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "react-testing-library";
import Body from "../Body";
import { singleLineString } from "../../../utils/Utils";

afterEach(cleanup);

const Doc = {
  content: [
    {
      type: "apm_table_of_contents",
      attrs: {
        depth: 6
      }
    },
    {
      attrs: {
        level: 1
      },
      content: [
        {
          text: "Heading 1",
          type: "text"
        }
      ],
      type: "heading"
    },
    {
      content: [
        {
          text: "A paragraph",
          type: "text"
        }
      ],
      type: "paragraph"
    },
    {
      attrs: {
        level: 2
      },
      content: [
        {
          text: "Heading 2",
          type: "text"
        }
      ],
      type: "heading"
    },
    {
      content: [
        {
          text: "more filler",
          type: "text"
        }
      ],
      type: "paragraph"
    },
    {
      attrs: {
        level: 3
      },
      content: [
        {
          text: "Heading 3",
          type: "text"
        }
      ],
      type: "heading"
    }
  ],
  type: "doc"
};

test("It renders a table of contents", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Body nodeData={Doc} />, container);
  let expected = `
        <ul class="table-of-contents">
          <li class="table-of-contents-level-1"><a href="#h1.heading_1">Heading 1</a></li>
          <li class="table-of-contents-level-2"><a href="#h2.heading_2">Heading 2</a></li>
          <li class="table-of-contents-level-3"><a href="#h3.heading_3">Heading 3</a></li>
        </ul>

        <h1 id="h1.heading_1">Heading 1</h1>
        <p>A paragraph</p>
        <h2 id="h2.heading_2">Heading 2</h2>
        <p>more filler</p>
        <h3 id="h3.heading_3">Heading 3</h3>`;
  let expectedOneLine = singleLineString(expected);
  expect(container.innerHTML).toEqual(expectedOneLine);
});
