/*
 *
 * DashboardPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_PAGE,
  FETCH_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_SUCCESS,
  FETCH_FRIENDLIST_SUCCESS,
  CHANGE_FRIEND_STATUS_SUCCESS,
  CHANGE_DETAIL_KENALAN_SUCCESS,
} from './constants';

const initialState = fromJS({
  userProfile: {},
  friendlist: [],
  currentPage: 1,
});

function dashboardPageReducer(state = initialState, action) {
  const { friendlist } = state.toJS();
  switch (action.type) {
    case CHANGE_PAGE:
      return state.set('currentPage', action.page);
    case FETCH_USER_PROFILE_SUCCESS:
      return state.set('userProfile', action.userProfile);
    case EDIT_USER_PROFILE_SUCCESS:
      return state.set('userProfile', action.userProfile);
    case FETCH_FRIENDLIST_SUCCESS:
      return state.set('friendlist', action.friendlist);
    case CHANGE_FRIEND_STATUS_SUCCESS:
      friendlist[action.index] = action.friend;
      return state.set('friendlist', friendlist);
    case CHANGE_DETAIL_KENALAN_SUCCESS:
      friendlist[action.index].detail_kenalan = action.detailKenalan;
      return state.set('friendlist', friendlist);
    default:
      return state;
  }
}

export default dashboardPageReducer;
