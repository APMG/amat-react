import React, { Component } from "react";
import Traverse from "../../utils/Traverse";

class Default extends Component {
  render() {
    return <>{Traverse(this.props)}</>;
  }
}

export default Default;
