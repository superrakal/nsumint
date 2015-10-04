define('frontend/controllers/searching', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var SearchingController;

  SearchingController = Ember['default'].Controller.extend({
    isSearching: true,
    socketIOService: Ember['default'].inject.service('socket-io'),
    init: function init() {
      this._super.apply(this, arguments);
      this.socket = this.get('socketIOService').socketFor('http://nsumint.ru:8080/');
      ion.sound({
        sounds: [{
          name: 'water_droplet'
        }, {
          name: 'water_droplet_2'
        }, {
          name: 'water_droplet_3'
        }],
        path: '/sounds/',
        preload: true
      });
      return this.socket.on('user found', (function (_this) {
        return function () {
          ion.sound.play("water_droplet");
          return _this.transitionTo('chat');
        };
      })(this));
    },
    actions: {
      stopSearching: function stopSearching() {
        var user;
        user = this.get('model');
        user.set('status', 'online');
        return user.save().then((function (_this) {
          return function () {
            return _this.set('isSearching', false);
          };
        })(this));
      },
      startSearching: function startSearching() {
        var user;
        user = this.get('model');
        user.set('status', 'searching');
        return user.save().then((function (_this) {
          return function () {
            return $.ajax({
              type: 'POST',
              url: 'api/v1/users/search_user',
              data: 'id=' + user.get('id'),
              statusCode: {
                200: function _(data) {
                  _this.socket.emit('dialog start', data.user.socket_id);
                  ion.sound.play("water_droplet");
                  return _this.transitionTo('chat');
                },
                205: function _() {
                  return _this.set('isSearching', true);
                }
              }
            });
          };
        })(this));
      }
    }
  });

  exports['default'] = SearchingController;

});