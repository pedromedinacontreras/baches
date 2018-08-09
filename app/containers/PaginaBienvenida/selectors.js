import { createSelector } from 'reselect';

/**
 * Direct selector to the paginaBienvenida state domain
 */
const selectPaginaBienvenidaDomain = () => (state) => state.get('paginaBienvenida');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PaginaBienvenida
 */

const makeSelectPaginaBienvenida = () => createSelector(
  selectPaginaBienvenidaDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPaginaBienvenida;
export {
  selectPaginaBienvenidaDomain,
};
