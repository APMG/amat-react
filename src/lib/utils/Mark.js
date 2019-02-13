import React from "react";
import Dispatch from "./Dispatch";
import uuid from "uuid";

const Mark = (mark, inner) => {
  const Dispatcher = Dispatch(mark.type);
  const attrs = mark.attrs ? mark.attrs : {};
  return <Dispatcher key={uuid()} inner={inner} {...attrs} />;
};

export default Mark;
