/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import {
  SET_AUTH,
  SET_USER,
  SENDING_REQUEST,
  LOGIN,
  LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR,
} from './globalConstants';

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export function setAuthState(newAuthState) {
  return { type: SET_AUTH, newAuthState };
}

export function setUser(user) {
  return { type: SET_USER, user };
}

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending };
}

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export function login(user) {
  return { type: LOGIN, user };
}

/**
 * Tells the app we want to log out a user
 */
export function logout() {
  return { type: LOGOUT };
}

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export function requestError(error) {
  return { type: REQUEST_ERROR, error };
}

/**
 * Sets the `error` state as empty
 */
export function clearError() {
  return { type: CLEAR_ERROR };
}
