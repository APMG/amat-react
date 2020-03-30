import React from 'react';
import PropTypes from 'prop-types';

const ApmRelatedLinkListItem = ({ nodeData, isAmp }) => {
  const { prefix, title, url } = nodeData.attrs;

  if (isAmp) {
    return (
      <li className="apm-related-link">
        <span className="apm-related-link-prefix">{prefix}</span>
        <a href={url}>{title}</a>
      </li>
    );
  } else {
    return (
      <li className="apm-related-link">
        <span className="apm-related-link-prefix">{prefix}</span>
        <a href={url}>{title}</a>
      </li>
    );
  }
};

ApmRelatedLinkListItem.propTypes = {
  isAmp: PropTypes.bool,
  nodeData: PropTypes.object
};

export default ApmRelatedLinkListItem;
