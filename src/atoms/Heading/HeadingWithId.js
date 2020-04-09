import React from 'react';
import PropTypes from 'prop-types';

const HeadingWithId = (props) => {
  const data = props.nodeData;
  const level = data.attrs.level;
  const HeadingTag = `h${level}`;
  const txt = data.content.find((content) => content.type === 'text').text;
  const anchor = data.attrs.anchor
    ? data.attrs.anchor
    : `h${data.attrs.level}_${txt.replace(/[\s'"]/g, '_').toLowerCase()}`;

  return <HeadingTag id={anchor}>{txt}</HeadingTag>;
};

HeadingWithId.propTypes = {
  nodeData: PropTypes.object
};

export default HeadingWithId;
