import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "react-testing-library";
import Body from "../Body";
import { singleLineString } from "../../../utils/Utils";
import DocWithImage from "./fixtures/DocWithImage.json";

afterEach(cleanup);

test("It renders audio", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Body nodeData={DocWithImage} />, container);
  const expected =
    '<img class="" src="https://img.publicradio.org/images/20171030-aphc-7.jpg" alt="Madison performs a new song on our October 28, 2017 show in Pasadena." srcset="https://img.apmcdn.org/0a29648ebf68cec8d18d6515ac12bcb6c809b94a/normal/2b4215-20171030-aphc-7.jpg 400w,https://img.apmcdn.org/0a29648ebf68cec8d18d6515ac12bcb6c809b94a/normal/609677-20171030-aphc-7.jpg 600w,https://img.apmcdn.org/0a29648ebf68cec8d18d6515ac12bcb6c809b94a/normal/671ac7-20171030-aphc-7.jpg 1000w,https://img.apmcdn.org/0a29648ebf68cec8d18d6515ac12bcb6c809b94a/normal/8665d8-20171030-aphc-7.jpg 1400w,https://img.apmcdn.org/0a29648ebf68cec8d18d6515ac12bcb6c809b94a/normal/d268f7-20171030-aphc-7.jpg 2000w">';
  expect(container.innerHTML).toEqual(singleLineString(expected));
});
