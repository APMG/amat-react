import React from 'react';
import PropTypes from 'prop-types';

const ApmTableOfContents = (props) => {
  if (props.minimal) {
    return null;
  }
  const toc = props.nodeData.filter(
    (node) => node.type !== 'apm_table_of_contents'
  );
  console.log(toc);

  return (
    <>
      <ul className="table-of-contents"></ul>
    </>
  );
};

ApmTableOfContents.propTypes = {
  nodeData: PropTypes.array,
  minimal: PropTypes.bool
};

export default ApmTableOfContents;
