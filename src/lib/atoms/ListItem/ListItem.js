import React from "react";
import Traverse from "../../utils/Traverse";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>{Traverse(this.props)}</li>;
  }
}

export default ListItem;
