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

  return props.nodeData?.content?.map((item) => {
    return WrapInMarks(item, props);
  });
};

export default Traverse;
