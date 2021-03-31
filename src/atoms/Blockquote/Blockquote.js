import React from 'react';
import Traverse from '../../utils/Traverse';
import PropTypes from 'prop-types';

const Blockquote = (props) => {
  return (
    <blockquote>
      {Traverse(props)}
      {props.nodeData?.attrs?.citation?.length && (
        <cite>- {props.nodeData.attrs.citation}</cite>
      )}
    </blockquote>
  );
};

Blockquote.propTypes = {
  nodeData: PropTypes.object
};

export default Blockquote;
