/*
 *
 * DashboardPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_USER_PROFILE_SUCCESS,
  // FETCH_USER_PROFILE_FAILED,
  EDIT_USER_PROFILE_SUCCESS,
  // EDIT_USER_PROFILE_FAILED,
} from './constants';

const initialState = fromJS({
  userProfile: {},
});

function dashboardPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return state.set('userProfile', action.userProfile);
    case EDIT_USER_PROFILE_SUCCESS:
      return state.set('userProfile', action.userProfile);
    default:
      return state;
  }
}

export default dashboardPageReducer;
