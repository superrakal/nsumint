define('frontend/router', ['exports', 'ember', 'frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router;

  Router = Ember['default'].Router.extend();

  Router.map(function () {
    this.route('root', {
      path: '/'
    });
    this.route('my_settings');
    this.route('user_settings');
    this.route('searching');
    return this.route('chat');
  });

  exports['default'] = Router;

});