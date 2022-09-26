// component taken from this github issues comment
// https://github.com/gatsbyjs/gatsby/issues/5021#issuecomment-426688625
import React from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';

const converter = new showdown.Converter();

const MarkdownContent = ({ content, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
  />
);

MarkdownContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

export default MarkdownContent;
