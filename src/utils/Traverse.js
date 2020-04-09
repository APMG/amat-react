import React from 'react';
import WrapInMarks from './WrapInMarks';
import { v4 as uuid } from 'uuid';
import ApmTableOfContents from '../atoms/ApmTableOfContents/ApmTableOfContents';
import ApmTableOfContentsClassic from '../atoms/ApmTableOfContents/ApmTableOfContentsClassic';

const Traverse = (props) => {
  const toc = props.nodeData?.content.find(
    (node) => node.type === 'apm_table_of_contents'
  );
  if (toc?.attrs?.anchors) {
    return (
      <ApmTableOfContents
        nodeData={props.nodeData.content}
        key={uuid()}
        components={props.components}
      />
    );
  }
  if (toc) {
    return (
      <ApmTableOfContentsClassic
        nodeData={props.nodeData.content}
        key={uuid()}
        components={props.components}
      />
    );
  }

  return props.nodeData?.content?.map((item) => {
    return WrapInMarks(item, props);
  });
};

export default Traverse;
