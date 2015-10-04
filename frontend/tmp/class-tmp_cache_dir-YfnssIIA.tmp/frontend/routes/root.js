define('frontend/routes/root', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var RootRoute;

  RootRoute = Ember['default'].Route.extend({
    activate: function activate() {
      return this.transitionTo('my_settings');
    }
  });

  exports['default'] = RootRoute;

});