import React from 'react';
import WrapInMarks from './WrapInMarks';
import { v4 as uuid } from 'uuid';
import ApmTableOfContentsClassic from '../atoms/ApmTableOfContents/ApmTableOfContentsClassic';

const Traverse = (props) => {
  if (props.nodeData && props.nodeData.content) {
    const toc = props.nodeData.content.find(
      (node) => node.type === 'apm_table_of_contents'
    );
    if (toc && toc.attrs.depth) {
      return (
        <ApmTableOfContentsClassic
          nodeData={props.nodeData.content}
          key={uuid()}
          components={props.components}
        />
      );
    }
  }

  // Most nodes that wrap inner nodes do so using the content property.
  // Footnotes however, stash them in a separate document tucked away
  // in the attrs under the footnoteContent property.
  let content = [];

  if (props.nodeData?.content) {
    content = props.nodeData.content;
  } else if (props.nodeData?.attrs?.footnoteContent?.content) {
    content = props.nodeData.attrs.footnoteContent.content;
  }

  return content.map((item) => {
    return WrapInMarks(item, props);
  });
};

export default Traverse;
