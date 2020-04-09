import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const ApmTableOfContents = (props) => {
  if (props.minimal) {
    return null;
  }
  const toc = props.nodeData.find(
    (node) => node.type === 'apm_table_of_contents'
  );
  let nodes = props.nodeData.filter(
    (node) => node.type !== 'apm_table_of_contents'
  );

  if (toc.attrs.anchors) {
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
        {Traverse({
          nodeData: {
            content: nodes
          },
          components: props.components
        })}
      </>
    );
  } else {
    const headings = props.nodeData.filter((node) => node.type === 'heading');
    return (
      <>
        <ul className="table-of-contents">
          {headings.map((heading) => {
            const txt = heading.content.find(
              (content) => content.type === 'text'
            ).text;
            const anchor = txt.replace(/[\s'"]/g, '_').toLowerCase();
            nodes = props.nodeData.filter(
              (node) =>
                node.type !== 'apm_table_of_contents' &&
                node.type !== 'headings'
            );
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
  }
};

ApmTableOfContents.propTypes = {
  nodeData: PropTypes.array,
  minimal: PropTypes.bool,
  components: PropTypes.object
};

export default ApmTableOfContents;
