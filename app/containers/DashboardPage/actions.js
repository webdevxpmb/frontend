/*
 *
 * DashboardPage actions
 *
 */

import {
  CHANGE_PAGE,
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
  CHANGE_SORT,
} from './constants';

export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page,
  };
}

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

export function fetchFriendlist() {
  return {
    type: FETCH_FRIENDLIST,
  };
}

export function fetchFriendlistSuccess(friendlist) {
  return {
    type: FETCH_FRIENDLIST_SUCCESS,
    friendlist,
  };
}

export function fetchFriendlistFailed(err) {
  return {
    type: FETCH_FRIENDLIST_FAILED,
    err,
  };
}

export function changeFriendStatus(params, data, index) {
  return {
    type: CHANGE_FRIEND_STATUS,
    params,
    data,
    index,
  };
}

export function changeFriendStatusSuccess(friend, index) {
  return {
    type: CHANGE_FRIEND_STATUS_SUCCESS,
    friend,
    index,
  };
}

export function changeFriendStatusFailed(err) {
  return {
    type: CHANGE_FRIEND_STATUS_FAILED,
    err,
  };
}

export function changeDetailKenalan(params, data, paramsTwo, dataTwo, index) {
  return {
    type: CHANGE_DETAIL_KENALAN,
    params,
    data,
    paramsTwo,
    dataTwo,
    index,
  };
}

export function changeDetailKenalanSuccess(detailKenalan, index) {
  return {
    type: CHANGE_DETAIL_KENALAN_SUCCESS,
    detailKenalan,
    index,
  };
}

export function changeDetailKenalanFailed(err) {
  return {
    type: CHANGE_DETAIL_KENALAN_FAILED,
    err,
  };
}

export function changeSort(sort, isMaba) {
  return {
    type: CHANGE_SORT,
    sort,
    isMaba,
  };
}
