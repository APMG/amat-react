import React, { Component } from "react";
import Traverse from "../../utils/Traverse";

class Default extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>{Traverse(this.props)}</>;
  }
}

export default Default;
