// Action types
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const LOGIN = 'LOGIN';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';
export const WS_CONNECT = 'WS_CONNECT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

// Action creators
export const setInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  value,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const changeInputValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});

export const savePseudo = (pseudo) => ({
  type: SAVE_PSEUDO,
  pseudo,
});

export const wsConnect = () => ({
  type: WS_CONNECT,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
