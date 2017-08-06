/*
 *
 * DashboardPage actions
 *
 */

import {
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILED,
  EDIT_USER_PROFILE,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILED,
} from './constants';

export function fetchUserProfile(params) {
  return {
    type: FETCH_USER_PROFILE,
    params,
  };
}

export function fetchUserProfileSuccess(userProfile) {
  return {
    type: FETCH_USER_PROFILE_SUCCESS,
    userProfile,
  };
}

export function fetchUserProfileFailed() {
  return {
    type: FETCH_USER_PROFILE_FAILED,
  };
}

export function editUserProfile(params, data) {
  return {
    type: EDIT_USER_PROFILE,
    params,
    data,
  };
}

export function editUserProfileSuccess(userProfile) {
  return {
    type: EDIT_USER_PROFILE_SUCCESS,
    userProfile,
  };
}

export function editUserProfileFailed() {
  return {
    type: EDIT_USER_PROFILE_FAILED,
  };
}
