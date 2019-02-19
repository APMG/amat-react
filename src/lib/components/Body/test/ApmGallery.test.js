import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "react-testing-library";
import Body from "../Body";
import gallery from "./fixtures/gallery.json";

afterEach(cleanup);

const expectedResult = test("It renders a gallery", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Body nodeData={gallery} />, container);
  expect(container.innerHTML).toContain(
    '<div class="apm-gallery-title">Photos</div>'
  );
  expect(container.innerHTML).toContain(
    '<li class="apm-slide"><figure class="figure apm_image align-none"><img class="" src="https://img.publicradio.org/images/20190204-jenny-lewis-performs-red-bull-and-hennessy.jpg" alt="Jenny Lewis performs &quot;Red Bull &amp; Hennessy&quot;" srcset="https://img.apmcdn.org/843e151737eea962616d19e05a15d1dfce0ac674/widescreen/8b1e64-20190204-jenny-lewis-performs-red-bull-and-hennessy.jpg 400w,https://img.apmcdn.org/843e151737eea962616d19e05a15d1dfce0ac674/widescreen/fba82a-20190204-jenny-lewis-performs-red-bull-and-hennessy.jpg 600w,https://img.apmcdn.org/843e151737eea962616d19e05a15d1dfce0ac674/widescreen/13aef2-20190204-jenny-lewis-performs-red-bull-and-hennessy.jpg 1000w,https://img.apmcdn.org/843e151737eea962616d19e05a15d1dfce0ac674/widescreen/8f0752-20190204-jenny-lewis-performs-red-bull-and-hennessy.jpg 1400w,https://img.apmcdn.org/843e151737eea962616d19e05a15d1dfce0ac674/widescreen/0ebcf4-20190204-jenny-lewis-performs-red-bull-and-hennessy.jpg 2000w"></figure></li>'
  );
  expect(container.innerHTML).toContain(
    '<li class="apm-slide"><figure class="figure apm_image align-none"><img class="" src="https://img.publicradio.org/images/20190204-nickel-creek-is-sara-watkins-chris-thile-and-sean-watkins.jpg" alt="Nickel Creek is Sara Watkins, Chris Thile and Sean Watkins. " srcset="https://img.apmcdn.org/5b8ba7aa290487d6d0e00594e5294fe054a7c66c/widescreen/fd593e-20190204-nickel-creek-is-sara-watkins-chris-thile-and-sean-watkins.jpg 400w,https://img.apmcdn.org/5b8ba7aa290487d6d0e00594e5294fe054a7c66c/widescreen/e0133d-20190204-nickel-creek-is-sara-watkins-chris-thile-and-sean-watkins.jpg 600w,https://img.apmcdn.org/5b8ba7aa290487d6d0e00594e5294fe054a7c66c/widescreen/a195dd-20190204-nickel-creek-is-sara-watkins-chris-thile-and-sean-watkins.jpg 1000w,https://img.apmcdn.org/5b8ba7aa290487d6d0e00594e5294fe054a7c66c/widescreen/b18490-20190204-nickel-creek-is-sara-watkins-chris-thile-and-sean-watkins.jpg 1400w,https://img.apmcdn.org/5b8ba7aa290487d6d0e00594e5294fe054a7c66c/widescreen/a22790-20190204-nickel-creek-is-sara-watkins-chris-thile-and-sean-watkins.jpg 2000w"></figure></li>'
  );
});
