import Ember from 'ember';
var UserSettingsController;

UserSettingsController = Ember.Controller.extend({
  actions: {
    save: function save() {
      this.get('model').save();
      return this.transitionTo('searching');
    }
  }
});

export default UserSettingsController;