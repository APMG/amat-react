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
          embedded={this.props.embedded ? this.props.embedded : {}}
          overrides={this.props.overrides ? this.props.overrides : {}}
        />
      </>
    );
  }
}

export default Body;
