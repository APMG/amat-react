import React from 'React';
import Default from '../../atoms/Default/Default';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Default nodeData={this.props.nodeData} />
      </>
    );
  }
}

export default Body;
