import React from 'react';
import Traverse from '../utils/Content';

class UnorderedList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul>{Traverse(this.props)}</ul>;
  }
}

export default UnorderedList;
