/*
 *
 * AnnouncementPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  FETCH_ANNOUNCEMENTS_SUCCESS,
  // FETCH_ANNOUNCEMENTS_FAILED,
  FETCH_ANNOUNCEMENT_CONTENT_SUCCESS,
  // FETCH_ANNOUNCEMENT_CONTENT_FAILED,
} from './constants';

const initialState = fromJS({
  announcements: [],
  announcement: {},
});

const Moment = window.moment;

function announcementPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ANNOUNCEMENTS_SUCCESS:
      return state.set('announcements', action.announcements.results.slice(0).sort((a, b) => {
        const aMoment = new Moment(a.updated_at);
        const bMoment = new Moment(b.updated_at);

        const diff = aMoment.diff(bMoment);

        if (diff < 0) {
          return 1;
        }

        if (diff > 0) {
          return -1;
        }

        return 0;
      }));
    case FETCH_ANNOUNCEMENT_CONTENT_SUCCESS:
      return state.set('announcement', action.announcement);
    default:
      return state;
  }
}

export default announcementPageReducer;
