// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

// import { browserHistory } from 'react-router';
// import { push } from 'react-router-redux';
import { take, call, put, fork, race } from 'redux-saga/effects';

import auth from './auth';
import request, { API_PREFIX } from './request';

import {
  serverTime,
} from './api';

import {
  SET_AUTH,
  SET_USER,
  FETCH_SERVER_TIME,
  FETCH_SERVER_TIME_SUCCESS,
  FETCH_SERVER_TIME_FAILED,
  SENDING_REQUEST,
  LOGIN,
  LOGOUT,
  REQUEST_ERROR,
} from './globalConstants';

/**
 * Effect to handle authorization
 * @param  {string} email               The email of the user
 * @param  {string} password               The password of the user
 * @param  {object} options                Options
 * @param  {boolean} options.isRegistering Is this a register request?
 */
export function* login({ user }) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  // We then try to register or log in the user, depending on the request
  try {
    yield put({ type: SET_USER, user });
    request.set('Authorization', `JWT ${user.token}`);

    yield call(auth.login, user);

    return true;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

/**
 * Effect to handle logging out
 */
export function* logout() {
  // We tell Redux we're in the middle of a request
  yield put({ type: SENDING_REQUEST, sending: true });

  // Similar to above, we try to log out by calling the `logout` function in the
  // `auth` module. If we get an error, we send an appropiate action. If we don't,
  // we return the response.
  try {
    // const logoutResponse = yield call(auth.logout);
    yield call(auth.logout);
    yield put({ type: SET_USER, user: {} });
    yield put({ type: SENDING_REQUEST, sending: false });

    return true;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });

    return false;
  }
}

export function* fetchServerTime() {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const serverTimeResponse = yield call(serverTime);

    yield put({ type: FETCH_SERVER_TIME_SUCCESS, serverTime: serverTimeResponse.body.server_time });

    return true;
  } catch (error) {
    yield put({ type: FETCH_SERVER_TIME_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

/**
 * Log in saga
 */
export function* loginFlow() {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"

  // eslint-disable-next-line no-constant-condition
  while (true) {
    // And we're listening for `LOGIN` actions and destructuring its payload
    const loginRequest = yield take(LOGIN);
    const { user } = loginRequest;

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    const winner = yield race({
      auth: call(login, { user }),
      logout: take(LOGOUT),
    });

    // If `authorize` was the winner...
    if (winner.auth) {
      // ...we send Redux appropiate actions
      yield put({ type: SET_AUTH, newAuthState: true }); // User is logged in (authorized)
    }
  }
}

/**
 * Log out saga
 * This is basically the same as the `if (winner.logout)` of above, just written
 * as a saga that is always listening to `LOGOUT` actions
 */
export function* logoutFlow() {
  while (yield take(LOGOUT)) {
    yield put({ type: SET_AUTH, newAuthState: false });

    yield call(logout);

    // redirect to backend to do a proper logout from the server
    window.location.href = `${API_PREFIX}/logout`;
  }
}

export function* fetchServerTimeFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(FETCH_SERVER_TIME);
    yield call(fetchServerTime);
  }
}

// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all "active" and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function* root() {
  yield fork(loginFlow);
  yield fork(logoutFlow);
  yield fork(fetchServerTimeFlow);
}
