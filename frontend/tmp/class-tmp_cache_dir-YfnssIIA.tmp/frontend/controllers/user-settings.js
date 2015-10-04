define('frontend/controllers/user-settings', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var UserSettingsController;

  UserSettingsController = Ember['default'].Controller.extend({
    actions: {
      save: function save() {
        this.get('model').save();
        return this.transitionTo('searching');
      }
    }
  });

  exports['default'] = UserSettingsController;

});