import { createSelector } from 'reselect';

const selectLogin = (state) => state.login;

const makeSelectUsername = () => createSelector(
  selectLogin,
  (loginState) => loginState.username
);

const makeSelectPassword = () => createSelector(
  selectLogin,
  (loginState) => loginState.password
);

export {
  selectLogin,
  makeSelectUsername,
  makeSelectPassword
};
