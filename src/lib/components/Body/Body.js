import React from "react";
import Default from "../../atoms/Default/Default";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Default
          nodeData={this.props.nodeData}
          embedded={this.props.embedded}
        />
      </>
    );
  }
}

export default Body;
