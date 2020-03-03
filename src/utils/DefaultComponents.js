import Doc from '../atoms/Doc/Doc';
import Break from '../atoms/Break/Break';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Heading from '../atoms/Heading/Heading';
import HorizontalRule from '../atoms/HorizontalRule/HorizontalRule';
import Text from '../atoms/Text/Text';
import CustomHtml from '../atoms/CustomHtml/CustomHtml';
import Link from '../marks/Link/Link';
import Strong from '../marks/Strong/Strong';
import Em from '../marks/Em/Em';
import Blockquote from '../atoms/Blockquote/Blockquote';
import UnorderedList from '../atoms/UnorderedList/UnorderedList';
import OrderedList from '../atoms/OrderedList/OrderedList';
import ListItem from '../atoms/ListItem/ListItem';
import ApmOembed from '../atoms/ApmOembed/ApmOembed';
import ApmVideo from '../atoms/ApmVideo/ApmVideo';
import ApmTableOfContents from '../atoms/ApmTableOfContents/ApmTableOfContents';
import ApmRelatedList from '../atoms/ApmRelatedList/ApmRelatedList';
import ApmRelatedLink from '../atoms/ApmRelatedLink/ApmRelatedLink';
import ApmRelatedLinkListItem from '../atoms/ApmRelatedLinkListItem/ApmRelatedLinkListItem';
import ApmAudio from '../atoms/ApmAudio/ApmAudio';
import ApmGallery from '../atoms/ApmGallery/ApmGallery';
import ApmStyleBox from '../atoms/ApmStyleBox/ApmStyleBox';
import ApmAttachment from '../atoms/ApmAttachment/ApmAttachment';
import ApmImage from '../atoms/ApmImage/ApmImage';
import ApmVerse from '../atoms/ApmVerse/ApmVerse';
import Aside from '../atoms/Aside/Aside';

const DefaultComponents = () => {
  return {
    apm_attachment: ApmAttachment,
    apm_audio: ApmAudio,
    apm_custom_html: CustomHtml,
    apm_gallery: ApmGallery,
    apm_oembed: ApmOembed,
    apm_image: ApmImage,
    apm_related_link: ApmRelatedLink,
    apm_related_link_list_item: ApmRelatedLinkListItem,
    apm_related_list: ApmRelatedList,
    apm_style_box: ApmStyleBox,
    apm_table_of_contents: ApmTableOfContents,
    apm_verse: ApmVerse,
    apm_video: ApmVideo,
    aside: Aside,
    blockquote: Blockquote,
    bullet_list: UnorderedList,
    doc: Doc,
    em: Em,
    hard_break: Break,
    heading: Heading,
    horizontal_rule: HorizontalRule,
    link: Link,
    list_item: ListItem,
    ordered_list: OrderedList,
    paragraph: Paragraph,
    strong: Strong,
    text: Text
  };
};

<<<<<<< HEAD:src/utils/Dispatch.js
const Dispatch = (type, overrides = {}, minimal = false) => {
  const mergedComponents = {
    ...Components,
    ...overrides,
    minimal
  };
  return mergedComponents[type] || Default;
};

export default Dispatch;
=======
export default DefaultComponents;
>>>>>>> 3410704dd8a63ed7f330526eb530fef8c7b8e2df:src/utils/DefaultComponents.js
