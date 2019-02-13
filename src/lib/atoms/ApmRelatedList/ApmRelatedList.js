import React from "react";
import uuid from "uuid";
import Traverse from "../../utils/Traverse";

class ApmRelatedList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props.nodeData.attrs;
    return (
      <div className="apm-related-list">
        <div className="apm-related-list-title">{title}</div>
        <ul className="apm-related-list-body">{Traverse(this.props)}</ul>
      </div>
    );
  }
}

export default ApmRelatedList;
