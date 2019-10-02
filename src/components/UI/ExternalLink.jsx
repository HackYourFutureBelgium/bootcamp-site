import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ href, alignRight, children, openInNewTab, ...rest }) => (
  <a href={href} {...rest} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);

ExternalLink.defaultProps = {
  openInNewTab: true
};

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  openInNewTab: PropTypes.bool
};

export default ExternalLink;
