import React from "react";
import Dispatch from "./Dispatch";
import uuid from "uuid";

const Mark = (mark, inner, props) => {
  const Dispatcher = Dispatch(mark.type);
  return (
    <Dispatcher
      key={uuid()}
      nodeData={mark}
      embedded={props.embedded}
      overrides={props.overrides}
      inner={inner}
    />
  );
};

export default Mark;
