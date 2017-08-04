// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { push, LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, fork, cancel } from 'redux-saga/effects';

import {
  getEvents,
  getEventStatistics,
} from 'api';

import {
  SENDING_REQUEST,
} from 'globalConstants';

import {
  FETCH_EVENTS,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILED,
  FETCH_EVENT_STATISTICS,
  FETCH_EVENT_STATISTICS_SUCCESS,
  FETCH_EVENT_STATISTICS_FAILED,
} from './constants';

export function* fetchEvents() {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const events = yield call(getEvents);

    yield put({ type: FETCH_EVENTS_SUCCESS, events: events.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_EVENTS_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchEventsFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(FETCH_EVENTS);
    yield call(fetchEvents);
  }
}

export function* fetchEventStatistics() {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const eventStatisticsResponse = yield call(getEventStatistics);

    yield put({ type: FETCH_EVENT_STATISTICS_SUCCESS, eventStatistics: eventStatisticsResponse.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_EVENT_STATISTICS_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchEventStatisticsFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(FETCH_EVENT_STATISTICS);
    yield call(fetchEventStatistics);
  }
}

export function* rootSaga() {
  const fetchEventsSaga = yield fork(fetchEventsFlow);
  const fetchEventStatisticsSaga = yield fork(fetchEventStatisticsFlow);

  yield take(LOCATION_CHANGE);
  yield cancel(fetchEventsSaga);
  yield cancel(fetchEventStatisticsSaga);
}

export default [rootSaga];
