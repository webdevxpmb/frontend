/*
 *
 * TaskPage actions
 *
 */

import {
  INITIAL_FETCH,
  INITIAL_FETCH_SUCCESS,
  INITIAL_FETCH_FAILED,
  SUBMIT,
  SUBMIT_SUCCESS,
  SUBMIT_FAILED,
} from './constants';

export function initialFetch() {
  return {
    type: INITIAL_FETCH,
  };
}

export function initialFetchSuccess(data) {
  return {
    type: INITIAL_FETCH_SUCCESS,
    data,
  };
}

export function initialFetchFailed(data, err) {
  return {
    type: INITIAL_FETCH_SUCCESS,
    data,
    err,
  };
}

export function submit(data) {
  return {
    type: SUBMIT,
    data,
  };
}

export function submitSuccess() {
  return {
    type: SUBMIT_SUCCESS,
  };
}

export function submitFailed() {
  return {
    type: SUBMIT_FAILED,
  };
}
