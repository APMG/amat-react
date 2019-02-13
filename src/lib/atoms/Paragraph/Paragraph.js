import React from "react";
import Traverse from "../../utils/Traverse";

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{Traverse(this.props)}</p>;
  }
}

export default Paragraph;
