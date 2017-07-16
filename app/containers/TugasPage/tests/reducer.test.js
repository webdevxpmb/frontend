
import { fromJS } from 'immutable';
import tugasPageReducer from '../reducer';

describe('tugasPageReducer', () => {
  it('returns the initial state', () => {
    expect(tugasPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
