
import { fromJS } from 'immutable';
import mariadaReducer from '../reducer';

describe('mariadaReducer', () => {
  it('returns the initial state', () => {
    expect(mariadaReducer(undefined, {})).toEqual(fromJS({}));
  });
});
