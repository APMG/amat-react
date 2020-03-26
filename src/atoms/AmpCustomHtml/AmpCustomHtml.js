import React from 'react';
import PropTypes from 'prop-types';

const AmpCustomHtml = ({ nodeData }) => {
  //const ampStyles = {
    //link: {
      //color: '#00334e',
      //textDecoration: 'none'
    //}
  //};

  return (
    <a href={nodeData.attrs.fallback_url}>
      {nodeData.attrs.fallback_text}
    </a>
  );
}

AmpCustomHtml.propTypes = {
  nodeData: PropTypes.object
};

export default AmpCustomHtml;
