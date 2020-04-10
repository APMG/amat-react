import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const ApmTableOfContentsClassic = (props) => {
  if (props.minimal) {
    return null;
  }
  const nodes = props.nodeData.filter(
    (node) => node.type !== 'apm_table_of_contents' && node.type !== 'headings'
  );

  const headings = props.nodeData.filter((node) => node.type === 'heading');
  return (
    <>
      <ul className="table-of-contents">
        {headings.map((heading) => {
          const txt = heading.content.find((content) => content.type === 'text')
            .text;
          const anchor = txt
            .replace(/\s/g, '_')
            .replace(/['"]/g, '')
            .toLowerCase();

          return (
            <li
              key={anchor}
              className={`table-of-contents-level-${heading.attrs.level}`}
            >
              <a href={`#h${heading.attrs.level}_${anchor}`}>{txt}</a>
            </li>
          );
        })}
      </ul>

      {Traverse({
        nodeData: {
          content: nodes
        },
        components: props.components
      })}
    </>
  );
};

ApmTableOfContentsClassic.propTypes = {
  nodeData: PropTypes.array,
  minimal: PropTypes.bool,
  components: PropTypes.object
};

export default ApmTableOfContentsClassic;
