import React from "react";
import uuid from "uuid";
import Dispatch from "../../utils/Dispatch";

class ApmTableOfContents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Get all the Heading nodes
    const Headers = this.props.nodeData.filter(node => node.type === "heading");

    // Filter out the apm_table_of_contents
    const nodes = this.props.nodeData.filter(
      node => node.type !== "apm_table_of_contents"
    );
    // Render the rest of the nodes sans apm_table_of_contents
    const theRest = nodes.map(node => {
      // Find the right component with the Dispatcher sending in the alternate Heading component
      const Dispatcher = Dispatch(node.type, { heading: Header });
      return <Dispatcher key={uuid()} nodeData={node} />;
    });

    // Render the the top of the table of contents
    const ListItems = Headers.map(header => {
      return (
        <li
          className={`table-of-contents-level-${header.attrs.level}`}
          key={uuid()}
        >
          <a
            href={`#${header.content[0].text
              .toLowerCase()
              .replace(/[^a-z0-9+]+/gi, "")}.heading_${header.attrs.level}`}
          >
            {header.content[0].text}
          </a>
        </li>
      );
    });
    return (
      <>
        <ul className="table-of-contents">{ListItems}</ul>

        {theRest}
      </>
    );
  }
}

// Alternate Heading Component with id's
const Header = props => {
  const level = props.nodeData.attrs.level;
  const content = props.nodeData.content[0].text
    .toLowerCase()
    .replace(/[^a-z0-9+]+/gi, "");
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag id={`${content}.heading_${level}`}>
      {props.nodeData.content[0].text}
    </HeadingTag>
  );
};

export default ApmTableOfContents;
