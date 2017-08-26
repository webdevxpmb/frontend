/*
 *
 * WhatElementSaysModule reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_WHAT_ELEMENT_SAYS_SUCCESS,
  POST_WHAT_ELEMENT_SAYS_SUCCESS,
} from './constants';

const initialState = fromJS({
  whatElementSays: [],
});

function whatElementSaysModuleReducer(state = initialState, action) {
  const whatElementSays = state.toJS().whatElementSays;
  switch (action.type) {
    case FETCH_WHAT_ELEMENT_SAYS_SUCCESS:
      return state.set('whatElementSays', action.whatElementSays);
    case POST_WHAT_ELEMENT_SAYS_SUCCESS:
      whatElementSays.push(action.whatElementSays);
      return state.set('whatElementSays', whatElementSays);
    default:
      return state;
  }
}

export default whatElementSaysModuleReducer;
