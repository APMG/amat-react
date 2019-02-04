import React from 'react';
import Traverse from '../utils/Content';

class Em extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <em>{this.props.children}</em>;
  }
}

export default Em;
