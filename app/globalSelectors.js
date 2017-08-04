import { createSelector } from 'reselect';

const selectGlobalDomain = () => (state) => state.get('global');

/**
 * Default selector used by Dashboard
 */

const makeSelectGlobal = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.toJS()
);

export default makeSelectGlobal;
export {
  selectGlobalDomain,
};
