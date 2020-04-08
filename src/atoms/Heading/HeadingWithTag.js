import React from 'react';
import PropTypes from 'prop-types';

const HeadingWithTag = (props) => {
  const level = props.nodeData.attrs.level;
  const HeadingTag = `h${level}`;

  return (
    <HeadingTag id={props.nodeData.attrs.anchor}>
      {props.nodeData.content.find((element) => element.type === 'text').text}
    </HeadingTag>
  );
};

HeadingWithTag.propTypes = {
  nodeData: PropTypes.object
};

export default HeadingWithTag;
