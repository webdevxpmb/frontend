import { createSelector } from 'reselect';

/**
 * Direct selector to the taskPage state domain
 */
const selectHomePageDomain = () => (state) => state.get('homePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TaskPage
 */

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
};
