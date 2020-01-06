import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const ApmVerse = (props) => {
  return (
    <div
      className={`verse`}
    >
      {Traverse(props)}
    </div>
  );
};

ApmVerse.propTypes = {
  nodeData: PropTypes.object
};

export default ApmVerse;
