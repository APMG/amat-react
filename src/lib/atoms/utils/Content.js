import React from "react";
import Dispatch from "../../components/Components/Components";
import uuid from "uuid";
import ApmAttachment from "../ApmAttachment/ApmAttachment";

function Traverse(props) {
  const Inner = child => {
    const Dispatcher = Dispatch(child.type);
    return (
      <Dispatcher key={uuid()} nodeData={child} embedded={props.embedded} />
    );
  };

  if (props.nodeData.content) {
    return props.nodeData.content.map(child => {
      if (child.marks) {
        return child.marks.map(mark => {
          const TAG = Dispatch(mark.type);
          return (
            <TAG key={uuid()} attrs={mark.attrs}>
              {Inner(child)}
            </TAG>
          );
        });
      }

      return Inner(child);
    });
  } else if (props.nodeData.type === "apm_attachment") {
    return (
      <ApmAttachment nodeData={props.nodeData} embedded={props.embedded} />
    ); // apm_attachment
  }
}

export default Traverse;
