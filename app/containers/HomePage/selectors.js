/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const makeSelectHomePage = () => createSelector(
  selectHome(),
  (homeState) => homeState.toJS()
);

export default makeSelectHomePage;

export {
  selectHome,
};
