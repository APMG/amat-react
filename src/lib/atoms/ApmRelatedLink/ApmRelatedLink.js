import React from 'react';
import PropTypes from 'prop-types';

const ApmRelatedLink = (props) => {
  const { prefix, title, url } = props.nodeData.attrs;
  return (
    <li className="apm-related-link">
      <div className="apm-related-link">
        <a href={url}>
          <span className="apm-related-link-prefix">{prefix}</span>
          {title}
        </a>
      </div>
    </li>
  );
};

ApmRelatedLink.propTypes = {
  nodeData: PropTypes.object
};

export default ApmRelatedLink;
