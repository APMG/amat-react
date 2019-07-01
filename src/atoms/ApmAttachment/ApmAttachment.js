import React from 'react';
import PropTypes from 'prop-types';

function attachment_url(id, embedded) {
  return embedded.attachments.find((attachment) => {
    return attachment.id === id;
  });
}

const ApmAttachment = (props) => {
  const { attachment_id, title } = props.nodeData.attrs;
  const neo = attachment_url(attachment_id, props.embedded);

  return (
    <div className={`amat-apm-attachment ${neo.mime_type.replace(/\//, '-')}`}>
      <a href={neo.url}>{title}</a>
    </div>
  );
};

ApmAttachment.propTypes = {
  nodeData: PropTypes.object,
  embedded: PropTypes.object
};

export default ApmAttachment;
