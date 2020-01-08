import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const ApmVerse = (props) => {
  return (
    <pre
      className={`verse`}
    >
      {Traverse(props)}
    </pre>
  );
};

ApmVerse.propTypes = {
  nodeData: PropTypes.object
};

export default ApmVerse;
