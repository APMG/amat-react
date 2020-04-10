import React from 'react';
import PropTypes from 'prop-types';

const ApmTableOfContents = (props) => {
  if (props.minimal) {
    return null;
  }

  return (
    <ul className="table-of-contents">
      {props.nodeData.attrs.anchors.map((anchor) => {
        return (
          <li
            key={anchor.anchor}
            className={`table-of-contents-level-${anchor.level}`}
          >
            <a href={`#${anchor.anchor}`}>{anchor.linkText}</a>
          </li>
        );
      })}
    </ul>
  );
};

ApmTableOfContents.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool
};

export default ApmTableOfContents;
