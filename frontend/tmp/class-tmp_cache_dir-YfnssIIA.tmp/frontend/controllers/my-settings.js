define('frontend/controllers/my-settings', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MySettingsController;

  MySettingsController = Ember['default'].Controller.extend({
    socketIOService: Ember['default'].inject.service('socket-io'),
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

  exports['default'] = MySettingsController;

});