import React from 'react';
import PropTypes from 'prop-types';

const CustomHtml = (props) => {
  if (props.minimal) {
    return null;
  }
  const markup = { __html: props.nodeData.attrs.html };
  return <div dangerouslySetInnerHTML={markup} />;
};

CustomHtml.propTypes = {
  nodeData: PropTypes.object
};

CustomHtml.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool
};
export default CustomHtml;
