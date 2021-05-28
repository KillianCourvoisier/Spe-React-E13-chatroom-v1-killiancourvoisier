/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducer from 'src/reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
