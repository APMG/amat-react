import React from "react";
import Traverse from "../../atoms/utils/Content";

class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { href, title } = this.props.nodeData.attrs;
    const attrs = title ? { href: href, title: title } : { href: href };
    return (
      <>
        <a {...attrs}>{Traverse(this.props)}</a>
      </>
    );
  }
}

export default Link;
