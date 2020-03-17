import React from 'react';
import PropTypes from 'prop-types';
import Traverse from '../../utils/Traverse';

const componentMapper = (defaultComponents) => {
  return {
    ...defaultComponents,
    apm_footnote: defaultComponents.apm_footnote_list_item
  };
};

const ApmFootnoteList = (props) => {
  const componentMap = componentMapper(props.components);
  return (
    <div className="footnotes" data-testid="footnote-list">
      <div className="footnotes-header">Footnotes</div>
      <Traverse {...props} components={componentMap} />
    </div>
  );
};

ApmFootnoteList.propTypes = {
  nodeData: PropTypes.shape({
    attrs: PropTypes.object,
    content: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string
  }),
  components: PropTypes.object
};

export default ApmFootnoteList;
