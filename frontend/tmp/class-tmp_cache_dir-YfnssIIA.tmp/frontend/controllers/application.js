define('frontend/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ApplicationController;

  ApplicationController = Ember['default'].Controller.extend({
    socketIOService: Ember['default'].inject.service('socket-io'),
    isChatting: false,
    connectCounter: 0,
    init: function init() {
      this._super.apply(this, arguments);
      this.socket = this.get('socketIOService').socketFor('http://nsumint.ru:8080/');
      ion.sound({
        sounds: [{
          name: 'water_droplet'
        }],
        path: '/sounds/',
        preload: true
      });
      this.socket.on('connectCounter changes', (function (_this) {
        return function (connectCounter) {
          return _this.set('connectCounter', connectCounter);
        };
      })(this));
      this.socket.on('client connected', (function (_this) {
        return function (socket_id) {
          var data;
          data = {
            user_socket: _this.get('model.user_socket_id'),
            new_socket: socket_id
          };
          _this.socket.emit('user reconnected', data);
          _this.get('model').set('socket_id', socket_id);
          return _this.get('model').save();
        };
      })(this));
      return this.socket.on('user reconnected', (function (_this) {
        return function (new_socket) {
          _this.get('model').set('user_socket_id', new_socket);
          return _this.get('model').save();
        };
      })(this));
    },
    actions: {
      endDialog: function endDialog() {
        return this.get('model').reload().then((function (_this) {
          return function () {
            _this.socket.emit('end dialog', _this.get('model.user_socket_id'));
            _this.set('isChatting', false);
            _this.get('model').set('status', 'online');
            _this.get('model').set('user_socket_id', '');
            _this.get('model').save();
            $(".chatbox-wrapper .messages").append("<div class='alert alert-info alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button><p>NSUMINT: Вы завершили диалог</p></div>");
            $('.chatbox-wrapper').animate({
              scrollTop: $('.chatbox-wrapper')[0].scrollHeight
            }, 200);
            return ion.sound.play("water_droplet");
          };
        })(this));
      }
    }
  });

  exports['default'] = ApplicationController;

});