import React, { Component } from 'react';
import Traverse from '../utils/Content';

class Default extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>{Traverse(this.props)}</>;
  }
}

export default Default;
