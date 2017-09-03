// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { /** push,*/ LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, fork, cancel } from 'redux-saga/effects';

import {
  getTasks,
  getSubmissions,
  postSubmission,
  putSubmission,
  getUserStatistic,
} from 'api';

import {
  SENDING_REQUEST,
} from 'globalConstants';

import {
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILED,
  FETCH_SUBMISSIONS,
  FETCH_SUBMISSIONS_SUCCESS,
  FETCH_SUBMISSIONS_FAILED,
  FETCH_USER_STATISTICS,
  FETCH_USER_STATISTICS_SUCCESS,
  FETCH_USER_STATISTICS_FAILED,
  SUBMIT,
  SUBMIT_SUCCESS,
  SUBMIT_FAILED,
} from './constants';

export function* fetchTasks() {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const tasksResponse = yield call(getTasks);

    yield put({ type: FETCH_TASKS_SUCCESS, tasks: tasksResponse.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_TASKS_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchTasksFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(FETCH_TASKS);
    yield call(fetchTasks);
  }
}

export function* fetchSubmissions() {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const submissionsResponse = yield call(getSubmissions);

    yield put({ type: FETCH_SUBMISSIONS_SUCCESS, submissions: submissionsResponse.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_SUBMISSIONS_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchSubmissionsFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(FETCH_SUBMISSIONS);
    yield call(fetchSubmissions);
  }
}

export function* fetchStatistics() {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const userStatisticsResponse = yield call(getUserStatistic);

    yield put({ type: FETCH_USER_STATISTICS_SUCCESS, userStatistics: userStatisticsResponse.body });

    return true;
  } catch (error) {
    yield put({ type: FETCH_USER_STATISTICS_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* fetchStatisticsFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(FETCH_USER_STATISTICS);
    yield call(fetchStatistics);
  }
}

export function* createSubmission(data, isNew) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    if (isNew) {
      const postSubmissionResponse = yield call(postSubmission, data);

      yield put({ type: SUBMIT_SUCCESS, submission: postSubmissionResponse.body });
    } else {
      const putSubmissionResponse = yield call(putSubmission, data.id, data);

      yield put({ type: SUBMIT_SUCCESS, submission: putSubmissionResponse.body });
    }

    return true;
  } catch (error) {
    yield put({ type: SUBMIT_FAILED });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* createSubmissionFlow() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const request = yield take(SUBMIT);
    const { data, isNew } = request;

    yield call(createSubmission, data, isNew);
  }
}

export function* rootSaga() {
  const fetchTasksSaga = yield fork(fetchTasksFlow);
  const fetchSubmissionsSaga = yield fork(fetchSubmissionsFlow);
  const createSubmissionSaga = yield fork(createSubmissionFlow);
  const fetchStatisticsSaga = yield fork(fetchStatisticsFlow);

  yield take(LOCATION_CHANGE);
  yield cancel(fetchTasksSaga);
  yield cancel(fetchSubmissionsSaga);
  yield cancel(createSubmissionSaga);
  yield cancel(fetchStatisticsSaga);
}

export default [rootSaga];
