/*
 *
 * TaskPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  INITIAL_FETCH,
  INITIAL_FETCH_SUCCESS,
  INITIAL_FETCH_FAILED,
  SUBMIT,
  SUBMIT_SUCCESS,
  SUBMIT_FAILED,
} from './constants';

const initialState = fromJS({
  tasks: [
    {
      id: 1,
      name: 'Kenalan (50% dari Kuota minimum)',
      description: 'tugas',
      start_time: '2017-07-13T01:00:00+07:00',
      end_time: '2017-07-31T12:00:00+07:00',
      is_kenalan: true,
      expected_amount: 100,
      created_at: '2017-07-27T15:32:45.939294',
      updated_at: '2017-07-27T15:34:38.327088',
    },
    {
      id: 1,
      name: 'Submit CV',
      description: 'tugas',
      start_time: '2017-07-13T01:00:00',
      end_time: '2017-07-31T12:00:00+07:00',
      is_kenalan: false,
      created_at: '2017-07-27T15:32:45.939294',
      updated_at: '2017-07-27T15:34:38.327088',
    },
    {
      id: 2,
      name: 'Submit CV',
      description: 'tugas',
      start_time: '2017-07-13T01:00:00',
      end_time: '2017-07-31T12:00:00+07:00',
      is_kenalan: false,
      created_at: '2017-07-27T15:32:45.939294',
      updated_at: '2017-07-27T15:34:38.327088',
    },
  ],
  submissions: [
    {
      id: 0,
      user: 19,
      task: 1,
      file_link: 'https://drive.google.com/drive/u/0/my-drive',
    },
  ],
});

function taskPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default taskPageReducer;
