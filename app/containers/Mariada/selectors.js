import { createSelector } from 'reselect';

/**
 * Direct selector to the mariada state domain
 */
const selectMariadaDomain = () => (state) => state.get('mariada');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Mariada
 */

const makeSelectMariada = () => createSelector(
  selectMariadaDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMariada;
export {
  selectMariadaDomain,
};
