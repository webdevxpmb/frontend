import { createSelector } from 'reselect';

/**
 * Direct selector to the eventPage state domain
 */
const selectEventPageDomain = () => (state) => state.get('eventPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EventPage
 */

const makeSelectEventPage = () => createSelector(
  selectEventPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEventPage;
export {
  selectEventPageDomain,
};
