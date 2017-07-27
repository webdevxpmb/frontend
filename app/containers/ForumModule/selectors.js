import { createSelector } from 'reselect';

/**
 * Direct selector to the forumModule state domain
 */
const selectForumModuleDomain = () => (state) => state.get('forumModule');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ForumModule
 */

const makeSelectForumModule = () => createSelector(
  selectForumModuleDomain(),
  (substate) => substate.toJS()
);

export default makeSelectForumModule;
export {
  selectForumModuleDomain,
};
