import React from 'react';
import WrapInMarks from './WrapInMarks';
import { v4 as uuid } from 'uuid';
import ApmTableOfContents from '../atoms/ApmTableOfContents/ApmTableOfContents';

const Traverse = (props) => {
  if (props.nodeData?.content && props.nodeData?.content[0]?.type === 'apm_table_of_contents') {
    return (
      <ApmTableOfContents
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
