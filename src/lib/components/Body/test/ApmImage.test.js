import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "react-testing-library";
import Body from "../Body";
import { singleLineString } from "../../../utils/Utils";
import DocWithImage from "./fixtures/DocWithImage.json";
import embedded from "./fixtures/embedded.json"

afterEach(cleanup);

test("It renders a figure & image with srcset", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Body nodeData={DocWithImage} embedded={embedded} />, container);
  const expected =
    '<figure class="figure figure-left figure-half"><img class="" src="https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/uncropped/f9365d-2019-03-pic.jpg" alt="A Picture" srcset="https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/4a6fe7-2019-03-pic.jpg 400w,https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/9e83b3-2019-03-pic.jpg 600w,https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/54fe69-2019-03-pic.jpg 1000w,https://img.apmcdn.org/dev/7eaf7dad199d94304b2e63a87aca7972eed0bc09/portrait/203da4-2019-03-pic.jpg 1226w" sizes="(max-width: 47.999em) 99vw, 66vw"><figcaption class="figure_caption"><div class="figure_text">A Picture</div><div class="figure_credit">Walsh, Andrew</div></figcaption></figure>';
  expect(container.innerHTML).toEqual(singleLineString(expected));
});
