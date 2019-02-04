import React from 'react';
import Traverse from '../utils/Content';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>{Traverse(this.props)}</li>;
  }
}

export default ListItem;
