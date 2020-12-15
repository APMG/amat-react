import Doc from '../atoms/Doc/Doc';
import Break from '../atoms/Break/Break';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Heading from '../atoms/Heading/Heading';
import HorizontalRule from '../atoms/HorizontalRule/HorizontalRule';
import Text from '../atoms/Text/Text';
import CustomHtml from '../atoms/CustomHtml/CustomHtml';
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
import ApmFootnoteList from '../atoms/ApmFootnoteList/ApmFootnoteList';
import ApmFootnote from '../atoms/ApmFootnote/ApmFootnote';
import ApmFootnoteListItem from '../atoms/ApmFootnoteListItem/ApmFootnoteListItem';
import ApmCorrection from '../atoms/ApmCorrection/ApmCorrection';
import Link from '../marks/Link/Link';
import Strong from '../marks/Strong/Strong';
import Em from '../marks/Em/Em';
import Code from '../marks/Code/Code';
import ApmInlineFrame from '../atoms/ApmInlineFrame/ApmInlineFrame';

const DefaultComponents = () => {
  return {
    apm_attachment: ApmAttachment,
    apm_audio: ApmAudio,
    apm_correction: ApmCorrection,
    apm_custom_html: CustomHtml,
    apm_inline_frame: ApmInlineFrame,
    apm_gallery: ApmGallery,
    apm_oembed: ApmOembed,
    apm_footnote: ApmFootnote,
    apm_footnote_list: ApmFootnoteList,
    apm_footnote_list_item: ApmFootnoteListItem,
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
    code: Code,
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

export default DefaultComponents;
