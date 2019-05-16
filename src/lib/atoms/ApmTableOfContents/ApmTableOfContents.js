import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Dispatch from '../../utils/Dispatch';
import HeadingWithTag from '../Heading/HeadingWithTag';

const ApmTableOfContents = (props) => {
  const Headers = props.nodeData.filter((node) => node.type === 'heading');
  const nodes = props.nodeData.filter(
    (node) => node.type !== 'apm_table_of_contents'
  );

  const theRest = nodes.map((node) => {
    // Find the right component with the Dispatcher sending in the alternate Heading component
    const Dispatcher = Dispatch(node.type, { heading: HeadingWithTag });
    return <Dispatcher key={uuid()} nodeData={node} />;
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
  nodeData: PropTypes.array
};

export default ApmTableOfContents;
