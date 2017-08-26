/*
 *
 * WhatElementSaysModule actions
 *
 */

import {
  FETCH_WHAT_ELEMENT_SAYS,
  FETCH_WHAT_ELEMENT_SAYS_SUCCESS,
  FETCH_WHAT_ELEMENT_SAYS_FAILED,
  POST_WHAT_ELEMENT_SAYS,
  POST_WHAT_ELEMENT_SAYS_SUCCESS,
  POST_WHAT_ELEMENT_SAYS_FAILED,
} from './constants';

export function fetchWhatElementSays() {
  return {
    type: FETCH_WHAT_ELEMENT_SAYS,
  };
}

export function fetchWhatElementSaysSuccess(whatElementSays) {
  return {
    type: FETCH_WHAT_ELEMENT_SAYS_SUCCESS,
    whatElementSays,
  };
}

export function fetchWhatElementSaysFailed(err) {
  return {
    type: FETCH_WHAT_ELEMENT_SAYS_FAILED,
    err,
  };
}

export function postWhatElementSays(whatElementSays) {
  return {
    type: POST_WHAT_ELEMENT_SAYS,
    whatElementSays,
  };
}

export function postWhatElementSaysSuccess(whatElementSays) {
  return {
    type: POST_WHAT_ELEMENT_SAYS_SUCCESS,
    whatElementSays,
  };
}

export function postWhatElementSaysFailed(err) {
  return {
    type: POST_WHAT_ELEMENT_SAYS_FAILED,
    err,
  };
}
