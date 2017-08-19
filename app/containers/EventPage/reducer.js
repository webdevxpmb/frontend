/*
 *
 * EventPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  FETCH_EVENTS_SUCCESS,
  // FETCH_EVENTS_FAILED,
  FETCH_EVENT_STATISTICS_SUCCESS,
  // FETCH_EVENT_STATISTICS_FAILED,
} from './constants';

const initialState = fromJS({
  events: [],
  eventStatistics: [],
});

const Moment = window.moment;

function eventPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return state.set('events', action.events.slice(0).sort((a, b) => {
        const aMoment = new Moment(a.end_time);
        const bMoment = new Moment(b.end_time);

        const diff = aMoment.diff(bMoment);

        if (diff < 0) {
          return -1;
        }

        if (diff > 0) {
          return 1;
        }

        return 0;
      }));
    case FETCH_EVENT_STATISTICS_SUCCESS:
      return state.set('eventStatistics', action.eventStatistics);
    default:
      return state;
  }
}

export default eventPageReducer;
