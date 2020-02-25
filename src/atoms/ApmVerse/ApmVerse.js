import React from 'react';
import Traverse from '../../utils/Traverse';

const ApmVerse = (props) => {
  return <pre className={`verse`}>{Traverse(props)}</pre>;
};

export default ApmVerse;
