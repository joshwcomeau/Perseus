import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';


export default function configureStore() {
  const middlewares = [];
  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );

  return store;
}
