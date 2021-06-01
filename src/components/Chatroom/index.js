import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import './style.scss';

const Chatroom = ({ webSocketConnect }) => {
  useEffect(() => {
    webSocketConnect();
  }, []);

  return (
    <div className="chatroom">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
};

Chatroom.propTypes = {
  webSocketConnect: PropTypes.func.isRequired,
};

export default Chatroom;
