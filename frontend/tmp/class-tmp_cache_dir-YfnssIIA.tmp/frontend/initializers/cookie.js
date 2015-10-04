define('frontend/initializers/cookie', ['exports', 'frontend/lib/cookie'], function (exports, Cookie) {

  'use strict';

  exports['default'] = {
    name: 'cookie',
    initialize: function initialize(container, app) {
      app.register('cookie:main', Cookie['default']);
    }
  };

});