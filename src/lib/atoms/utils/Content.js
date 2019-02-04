import React from 'react';
import Dispatch from '../../components/Components/Components';
import uuid from 'uuid';

function Traverse(props) {
  const Inner = (child) => {
    const Dispatcher = Dispatch(child.type);
    return <Dispatcher key={uuid()} nodeData={child} />;
  };

  return props.nodeData.content.map((child) => {
    if (child.marks) {
      return child.marks.map((mark) => {
        const TAG = Dispatch(mark.type);
        return (
          <TAG key={uuid()} attrs={mark.attrs}>
            {Inner(child)}
          </TAG>
        );
      });
    }

    return Inner(child);
  });
}

export default Traverse;
