import React from 'react';
import PropTypes from 'prop-types';

const HeadingWithTag = (props) => {
  const level = props.nodeData.attrs.level;
  const content = props.nodeData.content[0].text
    .toLowerCase()
    .replace(/[^a-z0-9+]+/gi, '');
  const HeadingTag = `h${level}`;

  return (
    <HeadingTag id={`${content}.heading_${level}`}>
      {props.nodeData.content[0].text}
    </HeadingTag>
  );
};

HeadingWithTag.propTypes = {
  nodeData: PropTypes.object
};

export default HeadingWithTag;
