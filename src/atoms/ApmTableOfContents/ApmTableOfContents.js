import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import HeadingWithTag from '../Heading/HeadingWithTag';

const ApmTableOfContents = (props) => {
  if (props.minimal) {
    return null;
  }
  const toc = props.nodeData.find(
    (node) => node.type === 'apm_table_of_contents'
  );
  const nodes = props.nodeData.filter(
    (node) => node.type !== 'apm_table_of_contents'
  );
  const theRest = nodes.map((node) => {
    // Find the right component with the Dispatcher sending in the alternate Heading component
    const Components = Object.assign(props.components, {
      heading: HeadingWithTag
    });
    const Dispatcher = Components[node.type];
    return (
      <Dispatcher key={uuid()} nodeData={node} components={props.components} />
    );
  });

  return (
    <>
      <ul className="table-of-contents">
        {toc.attrs.anchors.map((anchor) => {
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
      {theRest}
    </>
  );
};

ApmTableOfContents.propTypes = {
  nodeData: PropTypes.array,
  minimal: PropTypes.bool,
  components: PropTypes.object
};

export default ApmTableOfContents;
