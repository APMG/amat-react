import React from "react";
import Traverse from "../../atoms/utils/Content";

class Strong extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <strong>{this.props.inner}</strong>;
  }
}

export default Strong;
