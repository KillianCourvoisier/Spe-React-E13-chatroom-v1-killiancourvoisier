import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Message from 'src/containers/Message';

const Messages = ({ messages }) => {
  const messagesRef = useRef(null);
  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="messages" ref={messagesRef}>
      {messages.map((message) => <Message key={message.id} {...message} />)}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default Messages;
