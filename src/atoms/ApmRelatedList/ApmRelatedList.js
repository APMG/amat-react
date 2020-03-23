import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const ampStyles = {
  relatedList: {
    margin: '2em 0',
    fontFamily: '"Roboto", system-ui, -apple-system, sans-serif',
    clear: 'both'
  },
  relatedListTitle: {
    fontSize: '1.5em',
    fontWeight: '700',
    margin: '0 0 0.5em'
  }
};

const enlistify = (props) => {
  if (props?.nodeData?.content) {
    for (let i = 0; i < props.nodeData.content.length; ++i) {
      props.nodeData.content[
        i
      ].type = `${props.nodeData.content[i].type}_list_item`;
    }
  }
  return props;
};

const ApmRelatedList = (props) => {
  if (props.minimal) return null;
  const { title } = props.nodeData.attrs;
  if (props.isAmp) {
    return (
      <div style={ampStyles.relatedList} className="apm-related-list">
        <div
          style={ampStyles.relatedListTitle}
          className="apm-related-list-title"
        >
          {title}
        </div>
        <ul className="apm-related-list-body">{Traverse(enlistify(props))}</ul>
      </div>
    );
  } else {
    return (
      <div className="apm-related-list">
        <div className="apm-related-list-title">{title}</div>
        <ul className="apm-related-list-body">{Traverse(enlistify(props))}</ul>
      </div>
    );
  }
};

ApmRelatedList.propTypes = {
  isAmp: PropTypes.bool,
  minimal: PropTypes.bool,
  nodeData: PropTypes.object
};

export default ApmRelatedList;
