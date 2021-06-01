import { WS_CONNECT, SEND_MESSAGE } from 'src/actions';

let socket;

const websocket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      console.log('websocket');

      socket = window.io('http://localhost:3001');
      socket.on('server_message', (response) => {
        console.log('message server', response);
      });
      break;
    }

    case SEND_MESSAGE: {
      const state = store.getState();
      socket.emit('client_message', {
        author: state.user.pseudo,
        content: state.newMessage,
      });

      break;
    }
    default:
      next(action);
  }
};

export default websocket;