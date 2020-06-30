import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const ApmCorrection = (props) => {
  const {
    attrs: { timestamp }
  } = props.nodeData;
  return (
    <div className="apm-correction">
      <div className="apm-correction-title">Correction</div>
      <div className="apm-correction-timestamp">{timestamp}</div>
      <div className="apm-correction-body">
        <Traverse {...props} />
      </div>
    </div>
  );
};

ApmCorrection.propTypes = {
  nodeData: PropTypes.shape({
    attrs: PropTypes.object,
    content: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string
  }),
  components: PropTypes.object
};

export default ApmCorrection;
