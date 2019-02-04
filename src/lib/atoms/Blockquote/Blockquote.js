import React from 'react';
import Traverse from '../utils/Content';

class Blockquote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <blockquote>{Traverse(this.props)}</blockquote>;
  }
}

export default Blockquote;
