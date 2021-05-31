import React from 'react';
import './style.scss';
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/components/Settings';

const Chatroom = () => (
  <div className="chatroom">
    <Settings />
    <Messages />
    <Form />
  </div>
);

export default Chatroom;
