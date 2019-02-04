import React from 'react';
import Traverse from '../utils/Content';

class Heading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const level = this.props.nodeData.attrs.level;
    const HeadingTag = `h${level}`;

    return <HeadingTag>{Traverse(this.props)}</HeadingTag>;
  }
}

export default Heading;
