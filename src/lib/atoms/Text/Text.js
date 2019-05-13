import React from 'react';

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const txt = this.props.nodeData['text'].replace(/\B /g, "&nbsp;")
    return <>{txt}</>;
  }
}

export default Text;
