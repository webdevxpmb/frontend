import { createSelector } from 'reselect';

/**
 * Direct selector to the whatElementSaysModule state domain
 */
const selectWhatElementSaysModuleDomain = () => (state) => state.get('homePage').get('whatElementSaysModule');

/**
 * Other specific selectors
 */


/**
 * Default selector used by WhatElementSaysModule
 */

const makeSelectWhatElementSaysModule = () => createSelector(
  selectWhatElementSaysModuleDomain(),
  (substate) => substate.toJS()
);

export default makeSelectWhatElementSaysModule;
export {
  selectWhatElementSaysModuleDomain,
};
