import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import client from '../helpers/graphql-client';
import DevTools from '../components/DevTools';


export default function configureStore() {
  const middlewares = [
    client.middleware(),
  ];
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    )
  );

  // Allow direct access to the store, for debugging/testing
  window.store = store;

  return store;
}
