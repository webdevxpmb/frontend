/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import taskPageReducer from 'containers/TaskPage/reducer';
import eventPageReducer from 'containers/EventPage/reducer';
import tokenModuleReducer from 'containers/TokenModule/reducer';
import whatElementSaysModuleReducer from 'containers/WhatElementSaysModule/reducer';

const initialState = fromJS({});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  home: homePageReducer,
  task: taskPageReducer,
  event: eventPageReducer,
  tokenModule: tokenModuleReducer,
  whatElementSaysModule: whatElementSaysModuleReducer,
});
