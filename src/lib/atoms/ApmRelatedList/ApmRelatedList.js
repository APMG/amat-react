import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const ApmRelatedList = (props) => {
  const { title } = props.nodeData.attrs;
  return (
    <div className="apm-related-list">
      <div className="apm-related-list-title">{title}</div>
      <ul className="apm-related-list-body">{Traverse(props)}</ul>
    </div>
  );
};

ApmRelatedList.propTypes = {
  nodeData: PropTypes.object
};

export default ApmRelatedList;
