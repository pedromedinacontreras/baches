
import { fromJS } from 'immutable';
import paginaBienvenidaReducer from '../reducer';

describe('paginaBienvenidaReducer', () => {
  it('returns the initial state', () => {
    expect(paginaBienvenidaReducer(undefined, {})).toEqual(fromJS({}));
  });
});
