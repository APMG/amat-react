import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const ApmFootnoteListItem = (props) => {
  const { nodeData } = props;
  const {
    attrs: { number }
  } = nodeData;
  if (!nodeData.content) {
    return null;
  }
  return (
    <div className="footnote">
      <div className="footnote-number">{number}.</div>
      <div id={`footnote-content-${number}`} className="footnote-content">
        <Traverse {...props} />
      </div>
      <a
        className="footnote-back-link"
        href={`#footnote-link-${number}`}
        title={`return to text near footnote ${number}`}
      >
        ↩
      </a>
    </div>
  );
};

ApmFootnoteListItem.propTypes = {
  nodeData: PropTypes.shape({
    attrs: PropTypes.object,
    content: PropTypes.arrayOf(PropTypes.object)
  })
};

export default ApmFootnoteListItem;
