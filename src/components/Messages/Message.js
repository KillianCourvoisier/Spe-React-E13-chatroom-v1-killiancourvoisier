import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({ author, content, isMine }) => {
  const classnames = classNames('message', { 'message--is-mine': isMine });

  return (
    <div className={classnames}>
      <p className="message__author">{author}</p>
      <p className="message__content">{content}</p>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default Message;
