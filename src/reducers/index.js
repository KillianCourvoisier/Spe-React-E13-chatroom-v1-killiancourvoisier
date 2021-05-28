import { SET_INPUT_VALUE, ADD_MESSAGE } from 'src/actions';

const initialState = {
  messages: [
    {
      id: 1,
      author: 'SuperChat',
      content: 'lorem ispum ducul',
    },
  ],
  newMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        newMessage: action.value,
      };
    case ADD_MESSAGE: {
      const message = {
        id: 2,
        author: 'Jean',
        content: state.newMessage,
      };
      const messages = [
        ...state.messages,
        message,
      ];
      return { ...state, messages };
    }
    default:
      return state;
  }
};

export default reducer;
