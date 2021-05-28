import React from 'react';
import './style.scss';
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';

const Chatroom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
  </div>
);

export default Chatroom;
