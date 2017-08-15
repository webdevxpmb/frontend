/*
 *
 * Global reducer
 *
 */

import { fromJS } from 'immutable';
import { isEmpty } from 'lodash';
import auth from 'auth';
import {
  SET_AUTH,
  SET_USER,
  FETCH_SERVER_TIME_SUCCESS,
  FETCH_SERVER_TIME_FAILED,
  SET_SERVER_TIME,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR,
} from './globalConstants';

const isLoggedIn = auth.loggedIn();

const initialState = fromJS({
  user: isEmpty(isLoggedIn) ? {} : isLoggedIn,
  error: '',
  currentlySending: false,
  loggedIn: !isEmpty(isLoggedIn),
  serverTime: '',
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return state.set('loggedIn', action.newAuthState);
    case SET_USER:
      return state.set('user', action.user);

    // eslint-disable-next-line no-case-declarations
    case SENDING_REQUEST:
      return state.set('currentlySending', action.sending);
    case REQUEST_ERROR:
      return state.set('error', action.error);
    case CLEAR_ERROR:
      return state.set('error', '');

    case FETCH_SERVER_TIME_SUCCESS:
      return state.set('serverTime', action.serverTime);
    case SET_SERVER_TIME:
      return state.set('serverTime', action.serverTime);

    default:
      return state;
  }
}

export default globalReducer;
