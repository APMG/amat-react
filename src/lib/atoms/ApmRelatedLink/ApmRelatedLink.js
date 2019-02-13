import React from "react";
import Traverse from "../../utils/Traverse";

class ApmRelatedLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { prefix, title, url } = this.props.nodeData.attrs;
    return (
      <li className="apm-related-link">
        <div className="apm-related-link">
          <a href={url}>
            <span className="apm-related-link-prefix">{prefix}</span>
            {title}
          </a>
        </div>
      </li>
    );
  }
}

export default ApmRelatedLink;
