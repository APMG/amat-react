import Default from "../../atoms/Default/Default";
import Doc from "../../atoms/Doc/Doc";
import Break from "../../atoms/Break/Break";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import Image from "../../atoms/Image/Image";
import HorizontalRule from "../../atoms/HorizontalRule/HorizontalRule";
import Text from "../../atoms/Text/Text";
import CustomHtml from "../../atoms/CustomHtml/CustomHtml";
import Link from "../../atoms/Link/Link";
import Strong from "../../atoms/Strong/Strong";
import Em from "../../atoms/Em/Em";
import Blockquote from "../../atoms/Blockquote/Blockquote";
import UnorderedList from "../../atoms/UnorderedList/UnorderedList";
import OrderedList from "../../atoms/OrderedList/OrderedList";
import ListItem from "../../atoms/ListItem/ListItem";
import ApmAttachment from "../../atoms/ApmAttachment/ApmAttachment";
import ApmOembed from "../../atoms/ApmOembed/ApmOembed";
import ApmVideo from "../../atoms/ApmVideo/ApmVideo";
import ApmTableOfContents from "../../atoms/ApmTableOfContents/ApmTableOfContents";
import ApmRelatedList from "../../atoms/ApmRelatedList/ApmRelatedList";
import ApmRelatedLink from "../../atoms/ApmRelatedLink/ApmRelatedLink";

const Components = {
  doc: Doc,
  horizontal_rule: HorizontalRule,
  paragraph: Paragraph,
  image: Image,
  text: Text,
  heading: Heading,
  apm_custom_html: CustomHtml,
  link: Link,
  strong: Strong,
  em: Em,
  blockquote: Blockquote,
  unordered_list: UnorderedList,
  ordered_list: OrderedList,
  list_item: ListItem,
  apm_oembed: ApmOembed,
  apm_video: ApmVideo,
  apm_table_of_contents: ApmTableOfContents,
  apm_related_list: ApmRelatedList,
  apm_related_link: ApmRelatedLink
};

const Dispatch = type => {
  return Components[type] || Default;
};

export default Dispatch;
