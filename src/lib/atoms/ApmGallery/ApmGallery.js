import React from "react";
import { Image } from "apm-mimas";
import { Slideshow } from "apm-enceladus";
import ApmImage from '../ApmImage/ApmImage'
import uuid from "uuid";

class ApmGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const slides = this.props.nodeData.content;
    // console.log(slides);
    return (
      <div className="apm-gallery">
        <div className="apm-gallery_title">
          {this.props.nodeData.attrs.title}
        </div>
        {/* <ul className="apm-gallery-slides">
          {slides.map(slide => {
            return (
              <li className="apm-slide" key={uuid()}>
                <ApmImage image={slide.attrs} embedded={this.props.embedded} s/>
              </li>
            );
          })}
        </ul> */}
        <div className="apm-gallery_slides">
          <Slideshow images={slides} animation="slide" />
        </div>
      </div>
    );
  }
}

export default ApmGallery;
