import { createStore, applyMiddleware } from 'redux';

import client from '../helpers/graphql-client';
import reducer from '../reducers';


export default function configureStore() {
  const middlewares = [
    client.middleware(),
  ];

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );

  return store;
}
