import React from "react";
import Traverse from "../utils/Content";

class Em extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <em>{Traverse(this.props)}</em>;
  }
}

export default Em;
