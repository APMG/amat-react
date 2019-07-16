import React from 'react';
import PropTypes from 'prop-types';
import EmbedContainer from '@apmg/react-oembed-container';

const CustomHtml = (props) => {
  if (props.minimal) {
    return null;
  }
  const markup = { __html: props.nodeData.attrs.html };
  return (
    <EmbedContainer markup={props.nodeData.attrs.html}>
      <div dangerouslySetInnerHTML={markup} />
    </EmbedContainer>
  );
};

CustomHtml.propTypes = {
  nodeData: PropTypes.object
};

CustomHtml.propTypes = {
  nodeData: PropTypes.object,
  minimal: PropTypes.bool
};
export default CustomHtml;
