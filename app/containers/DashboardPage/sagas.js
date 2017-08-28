// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { /** push,*/ LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, fork, cancel } from 'redux-saga/effects';

import {
  getUserProfile,
  setUserProfile,
  getKenalan,
  putKenalan,
  putDetailKenalan,
} from 'api';

import {
  SENDING_REQUEST,
} from 'globalConstants';

import {
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILED,
  EDIT_USER_PROFILE,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILED,
  FETCH_FRIENDLIST,
  FETCH_FRIENDLIST_SUCCESS,
  FETCH_FRIENDLIST_FAILED,
  CHANGE_FRIEND_STATUS,
  CHANGE_FRIEND_STATUS_SUCCESS,
  CHANGE_FRIEND_STATUS_FAILED,
  CHANGE_DETAIL_KENALAN,
  CHANGE_DETAIL_KENALAN_SUCCESS,
  CHANGE_DETAIL_KENALAN_FAILED,
} from './constants';

export function* fetchUserProfile(params) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const fetchUserProfileResponse = yield call(getUserProfile, params);

    yield put({ type: FETCH_USER_PROFILE_SUCCESS, userProfile: fetchUserProfileResponse.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_USER_PROFILE_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchUserProfileFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const request = yield take(FETCH_USER_PROFILE);
    const { params } = request;
    yield call(fetchUserProfile, params);
  }
}

export function* editUserProfile(params, data) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const editUserProfileResponse = yield call(setUserProfile, params, data);

    yield put({ type: EDIT_USER_PROFILE_SUCCESS, userProfile: editUserProfileResponse.body });

    return true;
  } catch (error) {
    yield put({ type: EDIT_USER_PROFILE_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* editUserProfileFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const request = yield take(EDIT_USER_PROFILE);
    const { params, data } = request;

    yield call(editUserProfile, params, data);
  }
}

export function* fetchFriendlist() {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const fetchFriendlistResponse = yield call(getKenalan);

    yield put({ type: FETCH_FRIENDLIST_SUCCESS, friendlist: fetchFriendlistResponse.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_FRIENDLIST_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchFriendlistFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(FETCH_FRIENDLIST);
    yield call(fetchFriendlist);
  }
}

export function* changeFriendStatus(params, data, index) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const changeFriendStatusResponse = yield call(putKenalan, params, data);

    yield put({ type: CHANGE_FRIEND_STATUS_SUCCESS, friend: changeFriendStatusResponse.body, index });

    return true;
  } catch (error) {
    yield put({ type: CHANGE_FRIEND_STATUS_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* changeFriendStatusFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const request = yield take(CHANGE_FRIEND_STATUS);
    const { params, data, index } = request;

    yield call(changeFriendStatus, params, data, index);
  }
}

export function* changeDetailKenalan(params, data, paramsTwo, dataTwo, index) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const changeDetailKenalanResponse = yield call(putDetailKenalan, params, data);

    yield put({ type: CHANGE_DETAIL_KENALAN_SUCCESS, detailKenalan: changeDetailKenalanResponse.body, index });

    yield call(changeFriendStatus, paramsTwo, dataTwo, index);

    return true;
  } catch (error) {
    yield put({ type: CHANGE_DETAIL_KENALAN_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* changeDetailKenalanFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const request = yield take(CHANGE_DETAIL_KENALAN);
    const { params, data, paramsTwo, dataTwo, index } = request;

    yield call(changeDetailKenalan, params, data, paramsTwo, dataTwo, index);
  }
}

export function* rootSaga() {
  const fetchUserProfileSaga = yield fork(fetchUserProfileFlow);
  const editUserProfileSaga = yield fork(editUserProfileFlow);
  const fetchFriendlistSaga = yield fork(fetchFriendlistFlow);
  const changeFriendStatusSaga = yield fork(changeFriendStatusFlow);
  const changeDetailKenalanSaga = yield fork(changeDetailKenalanFlow);

  yield take(LOCATION_CHANGE);
  yield cancel(fetchUserProfileSaga);
  yield cancel(editUserProfileSaga);
  yield cancel(fetchFriendlistSaga);
  yield cancel(changeFriendStatusSaga);
  yield cancel(changeDetailKenalanSaga);
}

export default [rootSaga];
