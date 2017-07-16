import { createSelector } from 'reselect';

/**
 * Direct selector to the tugasPage state domain
 */
const selectTugasPageDomain = () => (state) => state.get('tugasPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TugasPage
 */

const makeSelectTugasPage = () => createSelector(
  selectTugasPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTugasPage;
export {
  selectTugasPageDomain,
};
