import React from "react";
import { Slideshow } from "apm-enceladus";

class ApmGallery extends React.Component {
  constructor(props) {
    super(props);
    
    let images = [];
    this.props.nodeData.content.forEach((slide) => {
      let image = slide.attrs;
      images.push(image);
    })

    this.state = {
      images: images
    }
  }

  render() {
    return (
      <div className="apm-gallery">
        <div className="apm-gallery_title">
          {this.props.nodeData.attrs.title}
        </div>
        <div className="apm-gallery_slides">
          <Slideshow images={this.state.images} animation="slide" />
        </div>
      </div>
    );
  }
}

export default ApmGallery;
