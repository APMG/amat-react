import React from 'react';
import PropTypes from 'prop-types';
// import Sidechain from '@nprapps/sidechain';

// This component should strip out scripts but allow iFrames

// In the future we may want to just add "responsive iFrame" as an Amat object that reporters can just use, separating it from the CustomHtml stuff.

class CustomHtml extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      html: ''
    };
  }

  componentDidMount() {
    // parse the string
    let doc = new DOMParser().parseFromString(
      this.props.nodeData.attrs.html,
      'text/html'
    );

    console.log(this.props.nodeData);

    // debugger;

    // store scripts in script tags to run later
    let scripts = doc.querySelectorAll('script');
    let iframes = doc.querySelectorAll('iframe');

    // if there are any script tags (i.e. not in iframes), use fallback

    // remove scripts from markup itself
    // [].forEach.call(scripts, function(script) {
    //   script.parentNode.removeChild(script);
    // });

    // let string = new XMLSerializer().serializeToString(doc);

    // debugger;
    let html =
      scripts.length > 0 && iframes.length === 0
        ? `<iframe class="features-marketplace document" width="100%" height="650px" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="${this.props.nodeData.attrs.fallback_url}"></iframe>`
        : this.props.nodeData.attrs.html;

    this.setState({
      html: html
    });
  }

  render() {
    if (this.props.minimal) {
      return null;
    }

    const markup = { __html: this.state.html };

    return <div className="customHtml" dangerouslySetInnerHTML={markup} />;
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
