define('frontend/routes/user-settings', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var UserSettingsRoute;

  UserSettingsRoute = Ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      return this.store.find('faculty');
    },
    model: function model() {
      var id;
      id = $.cookie('user_id');
      return this.store.find('user', id);
    },
    afterModel: function afterModel(model) {
      if (model.get('status') === 'chatting') {
        return this.transitionTo('chat');
      }
    },
    setupController: function setupController(controller, model) {
      controller.set('faculties', this.store.all('faculty'));
      return controller.set('model', model);
    }
  });

  exports['default'] = UserSettingsRoute;

});