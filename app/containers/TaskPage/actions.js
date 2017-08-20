/*
 *
 * TaskPage actions
 *
 */

import {
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILED,
  FETCH_SUBMISSIONS,
  FETCH_SUBMISSIONS_SUCCESS,
  FETCH_SUBMISSIONS_FAILED,
  SUBMIT,
  SUBMIT_SUCCESS,
  SUBMIT_FAILED,
  // SENDING_REQUEST,
} from './constants';

export function fetchTasks() {
  return {
    type: FETCH_TASKS,
  };
}

export function fetchTasksSuccess(data) {
  return {
    type: FETCH_TASKS_SUCCESS,
    tasks: data,
  };
}

export function fetchTasksFailed() {
  return {
    type: FETCH_TASKS_FAILED,
  };
}

export function fetchSubmissions() {
  return {
    type: FETCH_SUBMISSIONS,
  };
}

export function fetchSubmissionsSuccess(data) {
  return {
    type: FETCH_SUBMISSIONS_SUCCESS,
    submissions: data,
  };
}

export function fetchSubmissionsFailed() {
  return {
    type: FETCH_SUBMISSIONS_FAILED,
  };
}

export function submit(data, isNew) {
  return {
    type: SUBMIT,
    data,
    isNew,
  };
}

export function submitSuccess(data) {
  return {
    type: SUBMIT_SUCCESS,
    submission: data,
  };
}

export function submitFailed() {
  return {
    type: SUBMIT_FAILED,
  };
}
