import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
  const { href, title, inner } = props;
  const attrs = title ? { href: href, title: title } : { href: href };
  return (
    <>
      <a {...attrs}>{inner}</a>
    </>
  );
};

Link.propTypes = {
  inner: PropTypes.object,
  href: PropTypes.string,
  title: PropTypes.string
};

export default Link;
