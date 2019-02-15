import React from "react";
import Dispatch from "./Dispatch";
import uuid from "uuid";

const Inner = (child, props) => {
  const Dispatcher = Dispatch(child.type);
  return handleExecptionalCases();

  function handleExecptionalCases() {
    let component;
    switch (child.type) {
      case "apm_image":
        component = (
          <Dispatcher
            key={uuid()}
            embedded={props.embedded}
            overrides={props.overrides}
            image={child.attrs}
            aspectRatio={child.attrs.preferred_aspect_ratio_slug}
          />
        );
        break;

      default:
        component = defaultValue();
    }

    return component;
  }

  function defaultValue() {
    return (
      <Dispatcher
        key={uuid()}
        nodeData={child}
        embedded={props.embedded}
        overrides={props.overrides}
      />
    );
  }
};

export default Inner;
