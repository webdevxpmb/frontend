// import { LOCATION_CHANGE } from 'react-router-redux';
import { /** take, call, put, select, cancel */ fork } from 'redux-saga/effects';
import { rootSaga as taskRootSaga } from 'containers/TaskPage/sagas';
import { rootSaga as eventRootSaga } from 'containers/EventPage/sagas';
import { rootSaga as tokenModuleSaga } from 'containers/TokenModule/sagas';
import { rootSaga as whatElementSaysModuleSaga } from 'containers/WhatElementSaysModule/sagas';

/**
 * Root saga manages watcher lifecycle
 */
export function* rootSaga() {
  // Fork watcher so we can continue execution
  yield [
    fork(taskRootSaga),
    fork(eventRootSaga),
    fork(tokenModuleSaga),
    fork(whatElementSaysModuleSaga),
  ];
}

// Bootstrap sagas
export default [
  rootSaga,
];
