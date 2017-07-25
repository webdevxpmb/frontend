import { createSelector } from 'reselect';

/**
 * Direct selector to the tokenModule state domain
 */
const selectTokenModuleDomain = () => (state) => state.get('tokenModule');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TokenModule
 */

const makeSelectTokenModule = () => createSelector(
  selectTokenModuleDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTokenModule;
export {
  selectTokenModuleDomain,
};
