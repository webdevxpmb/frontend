/*
 *
 * TokenModule reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GENERATE_TOKEN_SUCCESS,
  FETCH_KENALAN_SUCCESS,
} from './constants';

const initialState = fromJS({
  token: fromJS({}),
  kenalan: fromJS({}),
});

function tokenModuleReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_TOKEN_SUCCESS:
      return state.set('token', action.token);
    case FETCH_KENALAN_SUCCESS:
      return state.set('kenalan', action.kenalan);
    default:
      return state;
  }
}

export default tokenModuleReducer;
