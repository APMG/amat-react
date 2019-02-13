import React from "react";
import Traverse from "../../utils/Traverse";

class Em extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <em>{this.props.inner}</em>;
  }
}

export default Em;
