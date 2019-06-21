import React from 'react';
import PropTypes from 'prop-types';

const ApmRelatedLink = (props) => {
  const { prefix, title, url } = props.nodeData.attrs;
  return (
    <a className="apm-related-link" href={url}>
      <span className="apm-related-link-prefix">{prefix}</span> {title}
    </a>
  );
};

ApmRelatedLink.propTypes = {
  nodeData: PropTypes.object
};

export default ApmRelatedLink;
