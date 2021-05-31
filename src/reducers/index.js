import { SET_INPUT_VALUE, ADD_MESSAGE, TOGGLE_SETTINGS } from 'src/actions';
import { getHighestId } from 'src/selectors';

const initialState = {
  messages: [
    {
      id: 1,
      author: 'SuperChat',
      content: 'lorem ispum ducul',
    },
  ],
  newMessage: '',
  open: true,
  user: {
    email: '',
    password: '',
    pseudo: 'Anonymous',
  },
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
        id: getHighestId(state) + 1,
        author: 'Jean',
        content: state.newMessage,
      };
      const messages = [
        ...state.messages,
        message,
      ];
      return { ...state, messages, newMessage: '' };
    }
    case TOGGLE_SETTINGS: {
      return { ...state, open: !state.open };
    }
    default:
      return state;
  }
};

export default reducer;
