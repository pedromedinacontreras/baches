
import { fromJS } from 'immutable';
import alumnosReducer from '../reducer';

describe('alumnosReducer', () => {
  it('returns the initial state', () => {
    expect(alumnosReducer(undefined, {})).toEqual(fromJS({}));
  });
});
