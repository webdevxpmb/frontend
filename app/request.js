import defaults from 'superagent-defaults';

// DEV
let API_PREFIX_CONFIG = 'http://ristek.cs.ui.ac.id/pmb-api';

// PROD
if (process.env.NODE_ENV === 'production') {
  API_PREFIX_CONFIG = 'http://ristek.cs.ui.ac.id/pmb-api';
}

export const API_PREFIX = API_PREFIX_CONFIG;

export const instance = defaults();

export default instance;

export { instance as apiRequest };
