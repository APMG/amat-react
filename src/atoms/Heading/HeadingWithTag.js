import React from 'react';
import PropTypes from 'prop-types';

const HeadingWithTag = (props) => {
  const level = props.nodeData.attrs.level;
  const HeadingTag = `h${level}`;
  const txt = props.nodeData.content.find((content) => content.type === 'text')
    .text;
  const anchor = props.nodeData.attrs.anchor
    ? props.nodeData.attrs.anchor
    : `h${props.nodeData.attrs.level}_${txt.replace(/\s/g, '_').toLowerCase()}`;

  return <HeadingTag id={anchor}>{txt}</HeadingTag>;
};

HeadingWithTag.propTypes = {
  nodeData: PropTypes.object
};

export default HeadingWithTag;
