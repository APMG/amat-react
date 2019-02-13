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
      <Dispatcher
        key={uuid()}
        nodeData={child}
        embedded={props.embedded}
        overrides={props.overrides}
      />
    );
  };

  // Method WrapInMarks
  const WrapInMarks = child => {
    if (child.marks) {
      const obj = convertMarks(child);
      return Inner(obj);
    } else {
      return Inner(child);
    }
  };

  function convertMarks(input) {
    //make a copy of the marks by value not reference
    let marks = JSON.parse(JSON.stringify(input.marks));

    // set and new object literal to the value of the first mark
    let objNew = marks.shift();

    marks.forEach(mark => {
      // set innermost content of the object literal to the next item in the array
      objNew = walkObject(objNew, mark);
    });
    // remove marks from the original input
    delete input.marks;
    //add the original input to the innermost object literal's content
    return walkObject(objNew, input);
  }

  function walkObject(obj, input) {
    if (obj.hasOwnProperty("content")) {
      walkObject(obj.content[0], input);
    } else {
      obj.content = [input];
    }
    return obj;
  }
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
