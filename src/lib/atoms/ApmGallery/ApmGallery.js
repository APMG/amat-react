import React from "react";
import { Image } from "apm-mimas";
import ApmImage from '../ApmImage/ApmImage'
import uuid from "uuid";

class ApmGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const slides = this.props.nodeData.content;
    return (
      <div className="apm-gallery">
        <div className="apm-gallery-title">
          {this.props.nodeData.attrs.title}
        </div>
        <ul className="apm-gallery-slides">
          {slides.map(slide => {
            return (
              <li className="apm-slide" key={uuid()}>
                <ApmImage image={slide.attrs} embedded={this.props.embedded} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ApmGallery;
