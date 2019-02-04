import React, { Component } from 'react';
import Traverse from '../utils/Content';

class Doc extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <>{Traverse(this.props)}</>;
  }
}

export default Doc;
