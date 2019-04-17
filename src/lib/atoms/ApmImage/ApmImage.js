import React from 'react';
import { Image } from 'apm-mimas';

const ApmImage = (props) => {
  function classes() {
    const position = props.image.float ? `figure-${props.image.float}` : ''
    const size = `figure-${props.image.width ? props.image.width : 'full'}`
    return `figure ${position} ${size}`
  }

  function captionCredit() {
    if (props.image.credit && props.image.credit_url) {
      return (
        <a href={props.image.credit_url} className="figure_credit">
          {props.image.credit}
        </a>
      );
    } else if (props.image.credit) {
      return <div className="figure_credit">{props.image.credit}</div>;
    }
  }

  function image() {
    const embeddedImagesWithoutNulls = props.embedded.images.filter((item) => item !== null)
    const embeddedImage = embeddedImagesWithoutNulls.find((image) => image.id === props.image.id)

    return (
      <Image
        image={embeddedImage}
        aspectRatio={props.image.preferred_aspect_ratio_slug}
        sizes="(max-width: 47.999em) 99vw, 66vw"
      />
    )
  }

  return (
    <figure className={classes()}>
      {image()}
      {props.image.long_caption || props.image.credit ? (
        <figcaption className="figure_caption">
          {props.image.long_caption && <div className="figure_text">{props.image.long_caption}</div>}
          {captionCredit()}
        </figcaption>
      ) : (
        ''
      )}
    </figure>
  );
};

export default ApmImage;

