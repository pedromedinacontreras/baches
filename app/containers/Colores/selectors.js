import { createSelector } from 'reselect';

/**
 * Direct selector to the colores state domain
 */
const selectColoresDomain = () => (state) => state.get('colores');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Colores
 */

const makeSelectColores = () => createSelector(
  selectColoresDomain(),
  (substate) => substate.toJS()
);

export default makeSelectColores;
export {
  selectColoresDomain,
};
