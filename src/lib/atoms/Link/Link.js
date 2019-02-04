import React from 'react';
import Traverse from '../utils/Content';

class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { href, title } = this.props.attrs;
    const attrs = title ? { href: href, title: title } : { href: href };
    return (
      <>
        <a {...attrs}>{this.props.children}</a>
      </>
    );
  }
}

export default Link;
