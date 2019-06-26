import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const Heading = (props) => {
  const level = props.nodeData.attrs.level;
  const HeadingTag = `h${level}`;

  return <HeadingTag>{Traverse(props)}</HeadingTag>;
};

Heading.propTypes = {
  nodeData: PropTypes.object
};

export default Heading;
