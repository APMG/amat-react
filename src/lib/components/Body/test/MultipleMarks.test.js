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
    `This week:&nbsp;a live broadcast from the Fitzgerald Theater in Saint Paul,&nbsp;Minnesota,&nbsp;with our host <a href=\"https://www.facebook.com/ChrisThile\"><strong>Chris Thile</strong></a>,&nbsp;and special guests <a href=\"http://www.nathanielrateliff.com/\"><strong>Nathaniel Rateliff &amp;&nbsp;The Night Sweats</strong></a>,&nbsp;<a href=\"http://www.anaismitchell.com/\"><strong>Anais Mitchell</strong></a>,&nbsp;and <a href=\"http://www.johnhodgman.com/\"><strong>John Hodgman</strong></a>.<br>&nbsp;<a href=\"https://www.prairiehome.org/shows/52951\">More from this episode</a>`
  );
});
