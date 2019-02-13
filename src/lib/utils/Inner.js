import React from "react";
import Dispatch from "./Dispatch";
import uuid from "uuid";

const Inner = (child, props) => {
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

export default Inner;
