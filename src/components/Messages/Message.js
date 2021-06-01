import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({ author, content, pseudo }) => {
  const classnames = classNames('message', { 'message--is-mine': author === pseudo });

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
  pseudo: PropTypes.string.isRequired,
};

export default Message;
