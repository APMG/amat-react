import React from "react";
import Dispatch from "../../components/Components/Components";
import uuid from "uuid";
import ApmAttachment from "../ApmAttachment/ApmAttachment";
import ApmTableOfContents from "../ApmTableOfContents/ApmTableOfContents";

// Not really happy with the structure of this but spent some time trying to refactor with no luck.
// Will settle for wrking code for now. Happy to hear your suggestions - GH
function Traverse(props) {
  // Method Inner
  const Inner = child => {
    const Dispatcher = Dispatch(child.type);
    return (
      <Dispatcher key={uuid()} nodeData={child} embedded={props.embedded} />
    );
  };

  // Method WrapInMarks
  const WrapInMarks = child => {
    if (child.marks) {
      return child.marks.map(mark => {
        const TAG = Dispatch(mark.type);
        return (
          <TAG key={uuid()} attrs={mark.attrs}>
            {Inner(child)}
          </TAG>
        );
      });
    } else {
      return Inner(child);
    }
  };

  //main function body for Traverse
  if (props.nodeData.type === "apm_attachment") {
    return (
      <ApmAttachment nodeData={props.nodeData} embedded={props.embedded} />
    );
  }

  if (props.nodeData.content) {
    let arr = [];
    for (let i = 0; i < props.nodeData.content.length; ++i) {
      if (props.nodeData.content[i].type === "apm_table_of_contents") {
        arr.push(
          <ApmTableOfContents nodeData={props.nodeData.content} key={uuid()} />
        );
        break;
      }
      arr.push(WrapInMarks(props.nodeData.content[i]));
    }
    return arr;
  }
}

export default Traverse;
