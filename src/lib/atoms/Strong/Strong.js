import React from 'react';
import Traverse from '../utils/Content';

class Strong extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <strong>{this.props.children}</strong>;
  }
}

export default Strong;
