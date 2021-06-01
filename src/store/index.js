/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// pour utiliser les middlewares, kil faut les importer
// et les donner à la fonction applyMiddleware
// remarque : l'ordre est important
// import debug from 'src/middlewares/debug';
import auth from 'src/middlewares/auth';
import websocket from 'src/middlewares/websocket';

import reducer from 'src/reducers';

// le store est le gardien du state
// la fonction createStore prend en argument le reducer
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(auth, websocket),
));

export default store;
