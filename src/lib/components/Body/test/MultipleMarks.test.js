import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "react-testing-library";
import Body from "../Body";
import description from "./fixtures/description.json";
import { singleLineString } from "../../../utils/Utils";

afterEach(cleanup);

test("It renders a marks correctly", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Body nodeData={description} />, container);
  expect(container.firstChild.tagName).toEqual("P");
  expect(container.firstChild.innerHTML).toEqual(
    singleLineString(
      `This week: a live broadcast from the Fitzgerald Theater in Saint Paul, Minnesota,
    with our host <a href=\"https://www.facebook.com/ChrisThile\"><strong>Chris Thile</strong></a>,
    and special guests <a href=\"http://www.nathanielrateliff.com/\"><strong>Nathaniel Rateliff &amp; The Night Sweats</strong></a>,
    <a href=\"http://www.anaismitchell.com/\"><strong>Anais Mitchell</strong></a>,
    and <a href=\"http://www.johnhodgman.com/\"><strong>John Hodgman</strong></a>.
    <a href=\"https://www.prairiehome.org/shows/52951\">More from this episode</a>`
    )
  );
});

const inputTwo = {
  marks: [
    {
      attrs: {
        href: "https://www.facebook.com/ChrisThile",
        title: null
      },
      type: "link"
    },
    {
      type: "strong"
    }
  ],
  text: "Chris Thile",
  type: "text"
};

const outputTwo = {
  attrs: {
    href: "https://www.facebook.com/ChrisThile",
    title: null
  },
  content: [
    {
      content: [
        {
          text: "Chris Thile",
          type: "text"
        }
      ],
      type: "strong"
    }
  ],
  type: "link"
};

const inputThree = {
  marks: [
    {
      attrs: {
        href: "https://www.facebook.com/ChrisThile",
        title: null
      },
      type: "link"
    },
    {
      type: "strong"
    },
    {
      type: "em"
    }
  ],
  text: "Chris Thile",
  type: "text"
};

const outputThree = {
  attrs: {
    href: "https://www.facebook.com/ChrisThile",
    title: null
  },
  content: [
    {
      content: [
        {
          type: "em",
          content: [
            {
              text: "Chris Thile",
              type: "text"
            }
          ]
        }
      ],
      type: "strong"
    }
  ],
  type: "link"
};

test("It converts two marks to content", () => {
  const result = convertMarks(inputTwo);
  expect(result).toEqual(outputTwo);
});

test("It converts three marks to content", () => {
  const result = convertMarks(inputThree);
  expect(result).toEqual(outputThree);
});

function convertMarks(input) {
  //make a copy of the marks by value not reference
  let marks = JSON.parse(JSON.stringify(input.marks));

  // set and new object literal to the value of the first mark
  let objNew = marks.shift();

  marks.forEach(mark => {
    // set innermost content of the object literal to the next item in the array
    objNew = walkObject(objNew, mark);
  });
  // remove marks from the original input
  delete input.marks;
  //add the original input to the innermost object literal's content
  return walkObject(objNew, input);
}

function walkObject(obj, input) {
  if (obj.hasOwnProperty("content")) {
    walkObject(obj.content[0], input);
  } else {
    obj.content = [input];
  }
  return obj;
}
