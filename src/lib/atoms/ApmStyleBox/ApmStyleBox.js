import React from "react";
import Traverse from "../../utils/Traverse";

class ApmStyleBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {custom_class} = this.props.nodeData.attrs
    return <div className={`apm-style-box ${custom_class}-box`} data-custom-class={custom_class}>{Traverse(this.props)}</div>;
  }
}

export default ApmStyleBox;
