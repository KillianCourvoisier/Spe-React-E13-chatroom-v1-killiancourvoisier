import React from 'react';
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import './style.scss';

const Chatroom = () => (
  <div className="chatroom">
    <Settings />
    <Messages />
    <Form />
  </div>
);

export default Chatroom;
