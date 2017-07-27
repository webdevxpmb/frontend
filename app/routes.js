// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/event',
      name: 'eventPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/EventPage/reducer'),
          import('containers/EventPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('eventPage', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/tugas',
      name: 'tugasPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/TugasPage/reducer'),
          import('containers/TugasPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('tugasPage', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/dashboard',
      name: 'dashboardPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/DashboardPage/reducer'),
          import('containers/DashboardPage/sagas'),
          import('containers/DashboardPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('dashboardPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/help',
      name: 'bantuanPage',
      getComponent(location, cb) {
        import('containers/BantuanPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/announcement',
      name: 'announcementPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/AnnouncementPage/reducer'),
          import('containers/AnnouncementPage/sagas'),
          import('containers/AnnouncementPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('announcementPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
