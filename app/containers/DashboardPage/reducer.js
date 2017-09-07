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
  CHANGE_SORT,
} from './constants';

const initialState = fromJS({
  userProfile: {},
  friendlist: [],
  currentPage: 1,
  currentSort: 'status',
});

const Moment = window.moment;

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
    case CHANGE_SORT:
      if (action.sort === 'status') {
        if (action.isMaba) {
          friendlist.sort((a, b) => {
            const aStatus = a.status.status;
            const bStatus = b.status.status;

            if (aStatus === 'rejected' && bStatus !== 'rejected') {
              return -1;
            } else if (aStatus !== 'rejected' && bStatus === 'rejected') {
              return 1;
            }

            return 0;
          });

          friendlist.sort((a, b) => {
            const aStatus = a.status.status;
            const bStatus = b.status.status;

            if (aStatus === 'rejected') {
              return 0;
            }

            if (aStatus === 'pending' && bStatus !== 'pending') {
              return -1;
            } else if (aStatus !== 'pending' && bStatus === 'pending') {
              return 1;
            }

            return 0;
          });
        } else {
          friendlist.sort((a, b) => {
            const aStatus = a.status.status;
            const bStatus = b.status.status;

            if (aStatus === 'pending' && bStatus !== 'pending') {
              return -1;
            } else if (aStatus !== 'pending' && bStatus === 'pending') {
              return 1;
            }

            return 0;
          });

          friendlist.sort((a, b) => {
            const aStatus = a.status.status;
            const bStatus = b.status.status;

            if (aStatus === 'pending') {
              return 0;
            }

            if (aStatus === 'approved' && bStatus !== 'approved') {
              return -1;
            } else if (aStatus !== 'approved' && bStatus === 'approved') {
              return 1;
            }

            return 0;
          });
        }
      } else if (action.sort === 'new') {
        friendlist.sort((a, b) => {
          const aDate = new Moment(a.updated_at);
          const bDate = new Moment(b.updated_at);

          if (aDate.diff(bDate) > 0) {
            return -1;
          } else if (aDate.diff(bDate) < 0) {
            return 1;
          }

          return 0;
        });
      } else if (action.sort === 'alpha') {
        friendlist.sort((a, b) => {
          let nameA = a.user_maba.profile.name.toUpperCase(); // ignore upper and lowercase
          let nameB = b.user_maba.profile.name.toUpperCase(); // ignore upper and lowercase

          if (action.isMaba) {
            nameA = a.user_elemen.profile.name.toUpperCase(); // ignore upper and lowercase
            nameB = b.user_elemen.profile.name.toUpperCase(); // ignore upper and lowercase
          }

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          }

          return 0;
        });
      }

      return state.set('currentSort', action.sort).set('friendlist', friendlist);
    default:
      return state;
  }
}

export default dashboardPageReducer;
