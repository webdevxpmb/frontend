import { createSelector } from 'reselect';

/**
 * Direct selector to the announcementPage state domain
 */
const selectAnnouncementPageDomain = () => (state) => state.get('announcementPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AnnouncementPage
 */

const makeSelectAnnouncementPage = () => createSelector(
  selectAnnouncementPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAnnouncementPage;
export {
  selectAnnouncementPageDomain,
};
