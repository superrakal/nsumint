import Ember from 'ember';
var RootRoute;

RootRoute = Ember.Route.extend({
  activate: function activate() {
    return this.transitionTo('my_settings');
  }
});

export default RootRoute;