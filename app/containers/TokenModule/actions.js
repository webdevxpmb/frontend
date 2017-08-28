/*
 *
 * TokenModule actions
 *
 */

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
  DELETE_KENALAN,
} from './constants';

export function generateToken() {
  return {
    type: GENERATE_TOKEN,
  };
}

export function generateTokenSuccess(token) {
  return {
    type: GENERATE_TOKEN_SUCCESS,
    token,
  };
}

export function generateTokenFailed(err) {
  return {
    type: GENERATE_TOKEN_FAILED,
    err,
  };
}

export function fetchKenalan(token) {
  return {
    type: FETCH_KENALAN,
    token,
  };
}

export function fetchKenalanSuccess(kenalan) {
  return {
    type: FETCH_KENALAN_SUCCESS,
    kenalan,
  };
}

export function fetchKenalanFailed(err) {
  return {
    type: FETCH_KENALAN_FAILED,
    err,
  };
}

export function postKenalan(detailKenalan) {
  return {
    type: POST_KENALAN,
    detailKenalan,
  };
}

export function postKenalanSuccess(detailKenalan) {
  return {
    type: POST_KENALAN_SUCCESS,
    detailKenalan,
  };
}

export function postKenalanFailed(err) {
  return {
    type: POST_KENALAN_FAILED,
    err,
  };
}

export function deleteKenalan() {
  return {
    type: DELETE_KENALAN,
  };
}
