import React, { Component } from 'react';
import Traverse from '../../utils/Traverse';

class Doc extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>{Traverse(this.props)}</>;
  }
}

export default Doc;
