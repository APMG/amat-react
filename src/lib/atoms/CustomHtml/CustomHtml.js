import React from 'react';

class CustomHtml extends React.Component {
  constructor(props) {
    super(props);
  }

  markup() {
    return { __html: this.props.nodeData.attrs.html };
  }
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={this.markup()} />
      </>
    );
  }
}

export default CustomHtml;
