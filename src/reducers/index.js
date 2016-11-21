import { combineReducers } from 'redux';
import client from '../helpers/graphql-client';

const temp = (state = {}, action) => state;

export default combineReducers({
  temp,
  apollo: client.reducer(),
});
