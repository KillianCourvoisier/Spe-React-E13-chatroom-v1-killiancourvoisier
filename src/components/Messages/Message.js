import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ author, content }) => (
  <div>
    <p className="message__author">{author}</p>
    <p className="message__content">{content}</p>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
