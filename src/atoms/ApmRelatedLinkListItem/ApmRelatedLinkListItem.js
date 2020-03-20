import React from 'react';
import PropTypes from 'prop-types';

const ampStyles = {
  prefix: {
    display: 'inline-block',
    marginRight: '.5em',
    fontWeight: '700'
  },
  link: {
    color: '#00334e',
    fontWeight: '700',
    margin: '0 0 0.5em'
  }
};

const ApmRelatedLinkListItem = (props) => {
  const { prefix, title, url } = props.nodeData.attrs;
  if (props.isAmp) {
    return (
      <li className="apm-related-link">
        <span style={ampStyles.prefix} className="apm-related-link-prefix">
          {prefix}
        </span>
        <a style={ampStyles.link} href={url}>
          {title}
        </a>
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
