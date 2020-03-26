import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const Heading = (props) => {
  const id = findText(props);
  const level = props.nodeData.attrs.level;
  const HeadingTag = `h${level}`;

  return <HeadingTag id={id}>{Traverse(props)}</HeadingTag>;
};

const findText = (props) => {
  let txtEle = props.nodeData.content.find((ele) => ele.type === 'text');
  let txt = txtEle.text.replace(/\s/g, '_').replace(/['"]/g, '');
  return txt.toLowerCase();
};

Heading.propTypes = {
  nodeData: PropTypes.object
};

export default Heading;
