import Default from "../atoms/Default/Default";
import Doc from "../atoms/Doc/Doc";
import Break from "../atoms/Break/Break";
import Paragraph from "../atoms/Paragraph/Paragraph";
import Heading from "../atoms/Heading/Heading";
import HorizontalRule from "../atoms/HorizontalRule/HorizontalRule";
import Text from "../atoms/Text/Text";
import CustomHtml from "../atoms/CustomHtml/CustomHtml";
import Link from "../marks/Link/Link";
import Strong from "../marks/Strong/Strong";
import Em from "../marks/Em/Em";
import Blockquote from "../atoms/Blockquote/Blockquote";
import UnorderedList from "../atoms/UnorderedList/UnorderedList";
import OrderedList from "../atoms/OrderedList/OrderedList";
import ListItem from "../atoms/ListItem/ListItem";
import ApmAttachment from "../atoms/ApmAttachment/ApmAttachment";
import ApmOembed from "../atoms/ApmOembed/ApmOembed";
import ApmVideo from "../atoms/ApmVideo/ApmVideo";
import ApmTableOfContents from "../atoms/ApmTableOfContents/ApmTableOfContents";
import ApmRelatedList from "../atoms/ApmRelatedList/ApmRelatedList";
import ApmRelatedLink from "../atoms/ApmRelatedLink/ApmRelatedLink";
import ApmAudio from "../atoms/ApmAudio/ApmAudio";
import ApmGallery from "../atoms/ApmGallery/ApmGallery";
import ApmStyleBox from "../atoms/ApmStyleBox/ApmStyleBox";
import ApmImage from "../atoms/ApmImage/ApmImage";

const Components = {
  doc: Doc,
  horizontal_rule: HorizontalRule,
  paragraph: Paragraph,
  hard_break: Break,
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
  apm_related_link: ApmRelatedLink,
  apm_audio: ApmAudio,
  apm_image: ApmImage,
  apm_gallery: ApmGallery,
  apm_style_box: ApmStyleBox
};

const Dispatch = (type, overrides = {}) => {
  const mergedComponents = { ...Components, ...overrides };
  return mergedComponents[type] || Default;
};

export default Dispatch;
