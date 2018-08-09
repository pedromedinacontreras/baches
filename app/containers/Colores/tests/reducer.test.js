
import { fromJS } from 'immutable';
import coloresReducer from '../reducer';

describe('coloresReducer', () => {
  it('returns the initial state', () => {
    expect(coloresReducer(undefined, {})).toEqual(fromJS({}));
  });
});
