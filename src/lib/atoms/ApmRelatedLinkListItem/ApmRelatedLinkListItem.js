import React from 'react';
import PropTypes from 'prop-types';

const ApmRelatedLinkListItem = (props) => {
  const { prefix, title, url } = props.nodeData.attrs;
  return (
    <li className="apm-related-link">
      <span className="apm-related-link-prefix">{prefix}</span>
      <a href={url}>{title}</a>
    </li>
  );
};

ApmRelatedLinkListItem.propTypes = {
  nodeData: PropTypes.object
};

export default ApmRelatedLinkListItem;
