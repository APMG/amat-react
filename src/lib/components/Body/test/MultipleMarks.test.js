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
    `This week: a live broadcast from the Fitzgerald Theater in Saint Paul, Minnesota, with our host <a href=\"https://www.facebook.com/ChrisThile\"><strong>Chris Thile</strong></a>, and special guests <a href=\"http://www.nathanielrateliff.com/\"><strong>Nathaniel Rateliff &amp; The Night Sweats</strong></a>, <a href=\"http://www.anaismitchell.com/\"><strong>Anais Mitchell</strong></a>, and <a href=\"http://www.johnhodgman.com/\"><strong>John Hodgman</strong></a>. <a href=\"https://www.prairiehome.org/shows/52951\">More from this episode</a>`
  );
});
