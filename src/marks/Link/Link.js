import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, title, inner, className }) => {
  let attrs = { href: href };

  if (title) {
    attrs.title = title;
  }
  if (className) {
    attrs.className = className;
  }

  return (
    <>
      <a {...attrs}>{inner}</a>
    </>
  );
};

Link.propTypes = {
  inner: PropTypes.object,
  href: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
};

export default Link;
