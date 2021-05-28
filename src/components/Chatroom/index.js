import React from 'react';
import './style.scss';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

const Chatroom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
  </div>
);

export default Chatroom;
