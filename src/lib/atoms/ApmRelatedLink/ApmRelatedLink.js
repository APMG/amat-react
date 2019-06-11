import React from 'react';
import PropTypes from 'prop-types';

const ApmRelatedLink = (props) => {
  const { prefix, title, url } = props.nodeData.attrs;
  return (
    <li className="apm-related-link">
      <span className="apm-related-link-prefix">{prefix}</span>
      <a href={url}>{title}</a>
    </li>
  );
};

ApmRelatedLink.propTypes = {
  nodeData: PropTypes.object
};

export default ApmRelatedLink;
