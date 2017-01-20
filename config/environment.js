/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'julia',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
    },

    cpfCnpj: {
      KEY: "5ae973d7a997af13f0aaf2bf60e65803"
    },

    emberPouch: {
      localDb: 'local_julia',
      remoteDb: 'http://localhost:5984/julia'
    },


    serviceWorker: {
      enabled: true,
      debug: true,
      swIncludeFiles: [
        'bower_components/pouchdb/dist/pouchdb.js'
      ]
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'connect-src': "'self' 'https://api.cpfcnpj.com.br' 'https://viacep.com.br' ",
      'default-src': "'self'",
      'frame-src': "'self'",
      'img-src': "'self' filesystem: data:",
      'script-src': "'self'",
      'style-src': "'self' 'unsafe-inline'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.serviceWorker.debug = false;

  }

  return ENV;
};
