import { createSelector } from 'reselect';

/**
 * Direct selector to the alumnos state domain
 */
const selectAlumnosDomain = () => (state) => state.get('alumnos');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Alumnos
 */

const makeSelectAlumnos = () => createSelector(
  selectAlumnosDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAlumnos;
export {
  selectAlumnosDomain,
};
