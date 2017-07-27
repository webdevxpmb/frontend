
import { fromJS } from 'immutable';
import announcementPageReducer from '../reducer';

describe('announcementPageReducer', () => {
  it('returns the initial state', () => {
    expect(announcementPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
