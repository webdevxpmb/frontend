// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { /** push,*/ LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, fork, cancel } from 'redux-saga/effects';

import {
  generateToken,
  createKenalan,
  putDetailKenalan,
  createKenalanNonSSO,
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
  POST_KENALAN,
  POST_KENALAN_SUCCESS,
  POST_KENALAN_FAILED,
  FETCH_KENALAN_NON_SSO,
  FETCH_KENALAN_NON_SSO_SUCCESS,
  FETCH_KENALAN_NON_SSO_FAILED,
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
    const kenalan = yield call(createKenalan, { token });

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

export function* postKenalan(detailKenalan) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const detailKenalanData = {
      phone_number: detailKenalan.phone_number,
      birth_place: detailKenalan.birth_place,
      birth_date: detailKenalan.birth_date,
      asal_sma: detailKenalan.asal_sma,
      story: detailKenalan.story,
      name: detailKenalan.name,
      angkatan: detailKenalan.angkatan,
      link_photo: detailKenalan.link_photo,
    };

    const detailKenalanRequest = yield call(putDetailKenalan, detailKenalan.id, detailKenalanData);

    yield put({ type: POST_KENALAN_SUCCESS, detailKenalan: detailKenalanRequest.body });

    return true;
  } catch (error) {
    yield put({ type: POST_KENALAN_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* postKenalanFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const request = yield take(POST_KENALAN);
    const { detailKenalan } = request;

    yield call(postKenalan, detailKenalan);
  }
}

export function* fetchKenalanNonSSOFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const request = yield take(FETCH_KENALAN_NON_SSO);

    yield call(fetchKenalanNonSSO);
  }
}

export function* fetchKenalanNonSSO() {
  console.log('masuk 4');
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const kenalan = yield call(createKenalanNonSSO);

    yield put({ type: FETCH_KENALAN_NON_SSO_SUCCESS, kenalan: kenalan.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_KENALAN_NON_SSO_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* rootSaga() {
  const fetchTokenSaga = yield fork(fetchTokenFlow);
  const fetchKenalanSaga = yield fork(fetchKenalanFlow);
  const postKenalanSaga = yield fork(postKenalanFlow);
  const fetchKenalanNonSSOSaga = yield fork(fetchKenalanNonSSOFlow);

  yield take(LOCATION_CHANGE);
  yield cancel(fetchTokenSaga);
  yield cancel(fetchKenalanSaga);
  yield cancel(postKenalanSaga);
  yield cancel(fetchKenalanNonSSOSaga);

}

export default [rootSaga];
