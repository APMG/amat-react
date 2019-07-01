import React from 'react';
import PropTypes from 'prop-types';

const CustomHtml = (props) => {
  const markup = { __html: props.nodeData.attrs.html };
  return <div dangerouslySetInnerHTML={markup} />;
};

CustomHtml.propTypes = {
  nodeData: PropTypes.object
};

export default CustomHtml;
