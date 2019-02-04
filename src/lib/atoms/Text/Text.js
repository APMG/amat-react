import React from 'react';

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>{this.props.nodeData['text']}</>;
  }
}

export default Text;
