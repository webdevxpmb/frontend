import request/** , { API_PREFIX }*/ from './request';

// let localStorage;

// // If we're testing, use a local storage polyfill
// if (global.process && process.env.NODE_ENV === 'test') {
//   localStorage = require('localStorage');
// } else {
//   // If not, use the browser one
//   localStorage = global.window.localStorage;
// }

const auth = {
  /**
  * Logs a user in, returning a promise with `true` when done
  * @param  {string} email The email of the user
  * @param  {string} password The password of the user
  */
  login(user) {
    if (auth.loggedIn()) return Promise.resolve(true);

    localStorage.user = JSON.stringify(user);

    return Promise.resolve(true);
  },

  /**
  * Logs the current user out
  */
  logout() {
    localStorage.removeItem('user');
    request.unset('Authorization');
  },

  /**
  * Checks if a user is logged in
  */
  loggedIn() {
    const notUser = !!localStorage.user;
    return notUser ? JSON.parse(localStorage.user) : false;
  },
};

export default auth;
