import Ember from 'ember';
var MySettingsController;

MySettingsController = Ember.Controller.extend({
  socketIOService: Ember.inject.service('socket-io'),
  init: function init() {
    var socket;
    this._super.apply(this, arguments);
    return socket = this.get('socketIOService').socketFor('http://nsumint.ru:8080/');
  },
  actions: {
    save: function save() {
      this.get('model').save();
      return this.transitionTo('user_settings');
    }
  }
});

export default MySettingsController;