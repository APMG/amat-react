import React from 'react';
import PropTypes from 'prop-types';
import { styleFactory } from '../../utils/stylist';

function attachment_url(id, embedded) {
  return embedded.attachments.find((attachment) => {
    return attachment.id === id;
  });
}

const ApmAttachment = (props) => {
  const styleMap = props.styleOverrides?.apm_attachment;
  const { attachment_id, title } = props.nodeData.attrs;
  const neo = attachment_url(attachment_id, props.embedded);

  return (
    <a
      className={`amat-apm-attachment ${neo.mime_type.replace(/\//, '-')}`}
      href={neo.url}
      style={styleFactory(styleMap, 'a')}
    >
      {title}
    </a>
  );
};

ApmAttachment.propTypes = {
  nodeData: PropTypes.object,
  embedded: PropTypes.object,
  styleOverrides: PropTypes.object
};

export default ApmAttachment;
