define('frontend/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'frontend/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default'],
    rootElement: '#ember'
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  $(function () {
    var token;
    token = $('meta[name="csrf-token"]').attr('content');
    return $.ajaxPrefilter(function (options, originalOptions, xhr) {
      return xhr.setRequestHeader('X-CSRF-Token', token);
    });
  });

  exports['default'] = App;

});