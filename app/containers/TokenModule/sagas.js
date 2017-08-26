// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { /** push,*/ LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, fork, cancel } from 'redux-saga/effects';

import {
  generateToken,
  createKenalan,
} from 'api';

import {
  SENDING_REQUEST,
} from 'globalConstants';

import {
  GENERATE_TOKEN,
  GENERATE_TOKEN_SUCCESS,
  GENERATE_TOKEN_FAILED,
  FETCH_KENALAN,
  FETCH_KENALAN_SUCCESS,
  FETCH_KENALAN_FAILED,
} from './constants';

export function* fetchToken() {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const token = yield call(generateToken);

    yield put({ type: GENERATE_TOKEN_SUCCESS, token: token.body });

    return true;
  } catch (error) {
    yield put({ type: GENERATE_TOKEN_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchTokenFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(GENERATE_TOKEN);
    yield call(fetchToken);
  }
}


export function* fetchKenalan(token) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const kenalan = yield call(createKenalan, { token: parseInt(token, 10) });

    yield put({ type: FETCH_KENALAN_SUCCESS, kenalan: kenalan.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_KENALAN_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchKenalanFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const request = yield take(FETCH_KENALAN);
    const { token } = request;

    yield call(fetchKenalan, token);
  }
}

export function* rootSaga() {
  const fetchTokenSaga = yield fork(fetchTokenFlow);
  const fetchKenalanSaga = yield fork(fetchKenalanFlow);

  yield take(LOCATION_CHANGE);
  yield cancel(fetchTokenSaga);
  yield cancel(fetchKenalanSaga);
}

export default [rootSaga];
