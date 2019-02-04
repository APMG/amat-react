import React from 'react';
import PropTypes from 'prop-types';

const Figure = (props) => {
  return (
    <figure className={`figure figure-${props.layout ? props.layout : 'full'}`}>
      {/* TODO: Create and use a picture component for this img */}
      <img src="https://unsplash.it/1600/900" alt="Description of contents" />
      {props.caption || props.credit ? (
        <figcaption className="figure_caption">
          {props.caption && <div className="figure_text">{props.caption}</div>}
          {props.credit && props.creditHref ? (
            <a href={props.creditHref} className="figure_credit">
              {props.credit}
            </a>
          ) : (
            <div className="figure_credit">{props.credit}</div>
          )}
        </figcaption>
      ) : (
        ''
      )}
    </figure>
  );
};

Figure.propTypes = {
  layout: PropTypes.string,
  caption: PropTypes.string,
  credit: PropTypes.string,
  creditHref: PropTypes.string
};

export default Figure;
