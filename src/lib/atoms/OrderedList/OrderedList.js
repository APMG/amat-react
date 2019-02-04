import React from 'react';
import Traverse from '../utils/Content';

class OrderedList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ol>{Traverse(this.props)}</ol>;
  }
}

export default OrderedList;
