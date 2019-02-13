import React from "react";
import Traverse from "../../utils/Traverse";

class ApmAttachment extends React.Component {
  constructor(props) {
    super(props);
  }

  attachment_url(id, embedded) {
    return embedded.attachments.find(attachment => {
      return attachment.id === id;
    });
  }

  render() {
    const { attachment_id, title } = this.props.nodeData.attrs;
    const neo = this.attachment_url(attachment_id, this.props.embedded);
    return (
      <div
        className={`amat-apm-attachment ${neo.mime_type.replace(/\//, "-")}`}
      >
        <a href={neo.url}>{title}</a>
      </div>
    );
  }
}

export default ApmAttachment;
