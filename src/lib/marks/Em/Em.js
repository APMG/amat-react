import React from "react";
import Traverse from "../../atoms/utils/Content";

class Em extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <em>{this.props.inner}</em>;
  }
}

export default Em;
