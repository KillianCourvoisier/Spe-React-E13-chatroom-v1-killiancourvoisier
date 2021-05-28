const initialState = {
  messages: [
    {
      id: 1,
      author: 'SuperChat',
      content: 'lorem ispum ducul',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
