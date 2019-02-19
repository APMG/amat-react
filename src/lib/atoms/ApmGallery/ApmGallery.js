import React from "react";
import { Image } from "apm-react-image/dist";
import uuid from "uuid";

class ApmGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Slides = this.props.nodeData.content;
    return (
      <div className="apm-gallery">
        <div className="apm-gallery-title">
          {this.props.nodeData.attrs.title}
        </div>
        <ul className="apm-gallery-slides">
          {Slides.map(Slide => {
            return (
              <li className="apm-slide" key={uuid()}>
                <figure
                  className={`figure ${Slide.type} align-${Slide.attrs.float}`}
                  key={uuid()}
                >
                  <Image
                    key={Slide.url}
                    image={Slide.attrs}
                    aspectRatio={Slide.attrs.preferred_aspect_ratio_slug}
                  />
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ApmGallery;
