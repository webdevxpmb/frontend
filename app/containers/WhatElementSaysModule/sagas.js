// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { /** push,*/ LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, fork, cancel } from 'redux-saga/effects';

import {
  getElementWords,
  postElementWords,
} from 'api';

import {
  SENDING_REQUEST,
} from 'globalConstants';

import {
  FETCH_WHAT_ELEMENT_SAYS,
  FETCH_WHAT_ELEMENT_SAYS_SUCCESS,
  FETCH_WHAT_ELEMENT_SAYS_FAILED,
  POST_WHAT_ELEMENT_SAYS,
  POST_WHAT_ELEMENT_SAYS_SUCCESS,
  POST_WHAT_ELEMENT_SAYS_FAILED,
} from './constants';

export function* fetchWhatElementSays() {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const whatElementSays = yield call(getElementWords);

    yield put({ type: FETCH_WHAT_ELEMENT_SAYS_SUCCESS, whatElementSays: whatElementSays.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_WHAT_ELEMENT_SAYS_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchWhatElementSaysFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(FETCH_WHAT_ELEMENT_SAYS);
    yield call(fetchWhatElementSays);
  }
}


export function* postWhatElementSays(whatElementSays) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const whatElementSaysRequest = yield call(postElementWords, whatElementSays);

    yield put({ type: POST_WHAT_ELEMENT_SAYS_SUCCESS, whatElementSays: whatElementSaysRequest.body });

    return true;
  } catch (error) {
    yield put({ type: POST_WHAT_ELEMENT_SAYS_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* postWhatElementSaysFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const request = yield take(POST_WHAT_ELEMENT_SAYS);
    const { whatElementSays } = request;

    yield call(postWhatElementSays, whatElementSays);
  }
}

export function* rootSaga() {
  const fetchWhatElementSaysSaga = yield fork(fetchWhatElementSaysFlow);
  const postWhatElementSaysSaga = yield fork(postWhatElementSaysFlow);

  yield take(LOCATION_CHANGE);
  yield cancel(fetchWhatElementSaysSaga);
  yield cancel(postWhatElementSaysSaga);
}

export default [rootSaga];
