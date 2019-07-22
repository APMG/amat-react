import React from 'react';
import PropTypes from 'prop-types';
// import Sidechain from '@nprapps/sidechain';

// This component should strip out scripts and place them in a responsive iFrame (i.e. "fauxembedding"). It should just display manually-created iframes wholesale.

// In the future we may want to just add "responsive iFrame" as an Amat object that reporters can just use, separating it from the CustomHtml stuff.

class CustomHtml extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const markup = { __html: this.props.nodeData.attrs.html };
    console.log(this.props.nodeData);

    return <div dangerouslySetInnerHTML={markup} />;
  }
}

// const CustomHtml = (props) => {
//   if (props.minimal) {
//     return null;
//   }
// let doc = new DOMParser().parseFromString(
//   props.nodeData.attrs.html,
//   'text/html'
// );
// let scripts = doc.querySelectorAll('script');

// [].forEach.call(scripts, function(script) {
//   // console.log(script);
//   script.parentNode.removeChild(script);
// });

// console.log('doc', doc);
// console.log('scripts', scripts);
// let html = doc.body.toString();

// console.log('orig', props.nodeData.attrs.html);
// console.log('doc', doc);
// console.log('html', html);

// const markup = { __html: props.nodeData.attrs.html };
// return <div dangerouslySetInnerHTML={markup} />;
// return <div>{this.state.children}</div>;
// };

CustomHtml.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool
};

export default CustomHtml;
