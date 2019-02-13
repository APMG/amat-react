import React from "react";
import Traverse from "../../utils/Traverse";

class Strong extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <strong>{this.props.inner}</strong>;
  }
}

export default Strong;
