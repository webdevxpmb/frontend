// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { /** push,*/LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, fork, cancel } from 'redux-saga/effects';

import {
  getAnnouncements,
  getAnnouncementContent,
} from 'api';

import {
  SENDING_REQUEST,
} from 'globalConstants';

import {
  FETCH_ANNOUNCEMENTS,
  FETCH_ANNOUNCEMENTS_SUCCESS,
  FETCH_ANNOUNCEMENTS_FAILED,
  FETCH_ANNOUNCEMENT_CONTENT,
  FETCH_ANNOUNCEMENT_CONTENT_SUCCESS,
  FETCH_ANNOUNCEMENT_CONTENT_FAILED,
} from './constants';

export function* fetchAnnouncements() {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const announcementsResponse = yield call(getAnnouncements);

    yield put({ type: FETCH_ANNOUNCEMENTS_SUCCESS, announcements: announcementsResponse.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_ANNOUNCEMENTS_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchAnnouncementsFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(FETCH_ANNOUNCEMENTS);
    yield call(fetchAnnouncements);
  }
}

export function* fetchAnnouncementContent(params) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const announcementContentResponse = yield call(getAnnouncementContent, params);

    yield put({ type: FETCH_ANNOUNCEMENT_CONTENT_SUCCESS, announcement: announcementContentResponse.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_ANNOUNCEMENT_CONTENT_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchAnnouncementContentFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const request = yield take(FETCH_ANNOUNCEMENT_CONTENT);
    const { params } = request;

    yield call(fetchAnnouncementContent, params);
  }
}

export function* rootSaga() {
  const fetchAnnouncementsSaga = yield fork(fetchAnnouncementsFlow);
  const fetchAnnouncementContentSaga = yield fork(fetchAnnouncementContentFlow);

  yield take(LOCATION_CHANGE);
  yield cancel(fetchAnnouncementsSaga);
  yield cancel(fetchAnnouncementContentSaga);
}

export default [rootSaga];
