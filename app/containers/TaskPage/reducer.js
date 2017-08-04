/*
 *
 * TaskPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILED,
  FETCH_SUBMISSIONS_SUCCESS,
  FETCH_SUBMISSIONS_FAILED,
  SUBMIT_SUCCESS,
  SUBMIT_FAILED,
  SENDING_REQUEST,
} from './constants';

const initialState = fromJS({
  tasks: [],
  submissions: [],
});

const moment = window.moment;

function taskPageReducer(state = initialState, action) {
  const currentSubmissions = state.get('submissions');

  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return state.set('tasks', action.tasks.slice(0).sort((a, b) => {
        const aMoment = new moment(a.end_time);
        const bMoment = new moment(b.end_time);

        const diff = aMoment.diff(bMoment);

        if (diff < 0) {
          return -1;
        }

        if (diff > 0) {
          return 1;
        }

        return 0;
      }));
    case FETCH_SUBMISSIONS_SUCCESS:
      return state.set('submissions', action.submissions);
    case SUBMIT_SUCCESS:
      let currentIndex = null;

      currentSubmissions.forEach((value, index) => {
        if (action.submission.id === value.id) {
          currentIndex = index;
        }
      });

      if (currentIndex) {
        currentSubmissions[currentIndex] = action.submission;
      } else {
        currentSubmissions.push(action.submission);
      }

      return state.set('submissions', currentSubmissions);
    default:
      return state;
  }
}

export default taskPageReducer;
