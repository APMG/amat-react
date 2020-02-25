import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import HeadingWithTag from '../Heading/HeadingWithTag';

const ApmTableOfContents = (props) => {
  if (props.minimal) {
    return null;
  }
  const Headers = props.nodeData.filter((node) => node.type === 'heading');
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
        {Headers.map((header) => {
          return (
            <li
              className={`table-of-contents-level-${header.attrs.level}`}
              key={uuid()}
            >
              <a
                href={`#${header.content[0].text
                  .toLowerCase()
                  .replace(/[^a-z0-9+]+/gi, '')}.heading_${header.attrs.level}`}
              >
                {header.content[0].text}
              </a>
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
