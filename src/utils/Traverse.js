import React from 'react';
import WrapInMarks from './WrapInMarks';
import uuid from 'uuid';
import ApmTableOfContents from '../atoms/ApmTableOfContents/ApmTableOfContents';

// Not really happy with the structure of this but spent some time trying to refactor with no luck.
// Will settle for working code for now. Happy to hear your suggestions - GH
const Traverse = (props) => {
  let arr = [];
  if (props?.nodeData?.content) {
    for (let i = 0; i < props.nodeData.content.length; ++i) {
      if (props.nodeData.content[i].type === 'apm_table_of_contents') {
        arr.push(
          <ApmTableOfContents
            nodeData={props.nodeData.content}
            key={uuid()}
            components={props.components}
          />
        );
        break;
      }
      arr.push(WrapInMarks(props.nodeData.content[i], props));
    }
  }

  return arr;
};

export default Traverse;
