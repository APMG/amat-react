import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

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

  return (
    <div className="apm-related-list">
      <div className="apm-related-list-title">{title}</div>
      <ul className="apm-related-list-body">{Traverse(enlistify(props))}</ul>
    </div>
  );
};

ApmRelatedList.propTypes = {
  minimal: PropTypes.bool,
  nodeData: PropTypes.object
};

export default ApmRelatedList;
