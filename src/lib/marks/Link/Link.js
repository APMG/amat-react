import React from "react";
import Traverse from "../../utils/Traverse";

class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { href, title } = this.props.nodeData.attrs;
    const attrs = title ? { href: href, title: title } : { href: href };
    return (
      <>
        <a {...attrs}>{this.props.inner}</a>
      </>
    );
  }
}

export default Link;
