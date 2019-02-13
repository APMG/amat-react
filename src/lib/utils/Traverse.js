import React from "react";
import Dispatch from "./Dispatch";
import Inner from "./Inner";
import Mark from "./Mark";
import WrapInMarks from "./WrapInMarks";
import uuid from "uuid";
import ApmAttachment from "../atoms/ApmAttachment/ApmAttachment";
import ApmTableOfContents from "../atoms/ApmTableOfContents/ApmTableOfContents";

// Not really happy with the structure of this but spent some time trying to refactor with no luck.
// Will settle for wrking code for now. Happy to hear your suggestions - GH
function Traverse(props) {
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
      arr.push(WrapInMarks(props.nodeData.content[i], props));
    }
    return arr;
  }
}

export default Traverse;
