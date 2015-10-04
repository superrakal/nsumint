import Ember from 'ember';
var ChatController;

ChatController = Ember.Controller.extend({
  socketIOService: Ember.inject.service('socket-io'),
  needs: ['application'],
  message: '',
  timer: null,
  user_typing: false,
  typing_class: 'not-displaying',
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
    this.socket.on('my message', (function (_this) {
      return function (message) {
        var time;
        message = message.replace(/(http:\/\/[.\w\/=&?]+)/gi, "<a href='$1'>$1</a>").replace(/\n/g, "<br>");
        time = new Date().toLocaleTimeString();
        $(".chatbox-wrapper .messages").append("<div class='message_wrapper'><div class='bubble message my_message pull-left'><div class='message_title'><div class='pull-left'>Вы</div><div class='time pull-right'><i class='fa fa-clock-o'>&nbsp;" + time + "</i></div></div><div class='message_body'>" + message + "</div></div><br class='clear'></div>");
        $('.chatbox-wrapper').animate({
          scrollTop: $('.chatbox-wrapper')[0].scrollHeight
        }, 200);
        return ion.sound.play("water_droplet_3");
      };
    })(this));
    this.socket.on('my image', (function (_this) {
      return function (image_url) {
        var time;
        time = new Date().toLocaleTimeString();
        $(".chatbox-wrapper .messages").append("<div class='message_wrapper'><div class='bubble message my_message pull-left'><div class='message_title'><div class='pull-left'>Вы</div><div class='time pull-right'><i class='fa fa-clock-o'>&nbsp;" + time + "</i></div></div><div class='message_body'><img src='" + image_url + " ' class='img-responsive img-thumbnail'></div></div><br class='clear'></div>");
        $('.chatbox-wrapper').animate({
          scrollTop: $('.chatbox-wrapper')[0].scrollHeight
        }, 200);
        return ion.sound.play("water_droplet_3");
      };
    })(this));
    this.socket.on('user image', (function (_this) {
      return function (image_url) {
        var time;
        time = new Date().toLocaleTimeString();
        $(".chatbox-wrapper .messages").append("<div class='message_wrapper'><div class='bubble message user_message pull-right'><div class='message_title'><div class='pull-left'>Аноним</div><div class='time pull-right'><i class='fa fa-clock-o'>&nbsp;" + time + "</i></div></div><div class='message_body'><img src='" + image_url + " ' class='img-responsive img-thumbnail'></div></div><br class='clear'></div>");
        $('.chatbox-wrapper').animate({
          scrollTop: $('.chatbox-wrapper')[0].scrollHeight
        }, 200);
        return ion.sound.play("water_droplet_2");
      };
    })(this));
    this.socket.on('user message', (function (_this) {
      return function (nickname, user_faculty, message) {
        var time, title, user_nickname;
        message = message.replace(/(http:\/\/[.\w\/=&?]+)/gi, "<a href='$1'>$1</a>").replace(/\n/g, "<br>");
        if (nickname === 'male') {
          user_nickname = 'Парень';
        } else {
          if (nickname === 'female') {
            user_nickname = 'Девушка';
          } else {
            user_nickname = nickname;
          }
        }
        title = user_nickname + ' с ' + user_faculty.name;
        time = new Date().toLocaleTimeString();
        $(".chatbox-wrapper .messages").append("<div class='message_wrapper'><div class='bubble message user_message pull-right'><div class='message_title'><div class='pull-left'>" + title + "</div><div class='time pull-right'><i class='fa fa-clock-o'>&nbsp;" + time + "</i></div></div><div class='message_body'>" + message + "</div></div><br class='clear'></div>");
        $('.chatbox-wrapper').animate({
          scrollTop: $('.chatbox-wrapper')[0].scrollHeight
        }, 200);
        return ion.sound.play("water_droplet_2");
      };
    })(this));
    this.socket.on('user reconnected', (function (_this) {
      return function () {
        $(".chatbox-wrapper .messages").append("<div class='alert alert-warning alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button><p>NSUMINT: Собеседник переподключился</p></div>");
        return $('.chatbox-wrapper').animate({
          scrollTop: $('.chatbox-wrapper')[0].scrollHeight
        }, 200);
      };
    })(this));
    this.socket.on('user disconnected', (function (_this) {
      return function () {
        $(".chatbox-wrapper .messages").append("<div class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button><p>NSUMINT: К сожалению соединение с вашим собеседником разорвано. Вы можете подождать, вероятно он просто случайно закрыл браузер.</p></div>");
        return $('.chatbox-wrapper').animate({
          scrollTop: $('.chatbox-wrapper')[0].scrollHeight
        }, 200);
      };
    })(this));
    this.socket.on('dialog ended', (function (_this) {
      return function () {
        _this.get('controllers.application').set('isChatting', false);
        _this.set('user_typing', false);
        _this.set('typing_class', 'not-displaying');
        _this.get('model').set('status', 'online');
        _this.get('model').set('user_socket_id', '');
        _this.get('model').save();
        $(".chatbox-wrapper .messages").append("<div class='alert alert-info alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button><p>NSUMINT: Собеседник завершил диалог</p></div>");
        $('.chatbox-wrapper').animate({
          scrollTop: $('.chatbox-wrapper')[0].scrollHeight
        }, 200);
        return ion.sound.play("water_droplet");
      };
    })(this));
    this.socket.on('user start typing', (function (_this) {
      return function () {
        _this.set('typing_class', 'fadeIn');
        return _this.set('user_typing', true);
      };
    })(this));
    return this.socket.on('user stop typing', (function (_this) {
      return function () {
        _this.set('typing_class', 'fadeOut');
        return _this.set('user_typing', false);
      };
    })(this));
  },
  changeMessage: (function () {
    this.socket.emit('user start typing', this.get('model.user_socket_id'));
    clearTimeout(this.get('timer'));
    return this.set('timer', setTimeout((function (_this) {
      return function () {
        return _this.socket.emit('user stop typing', _this.get('model.user_socket_id'));
      };
    })(this), 3000));
  }).observes('this.message'),
  dialogEndEvent: (function () {
    if (this.get('model.status') === 'online') {
      this.set('user_typing', false);
      return this.set('typing_class', 'not-displaying');
    }
  }).observes('model.status'),
  actions: {
    sendMessage: function sendMessage() {
      return this.get('model').reload().then((function (_this) {
        return function () {
          var data, message, nickname;
          if (_this.get('message.length') > 0) {
            message = _this.get('message');
            message.replace(/<[^>]+>/g, '');
            _this.set('message', message);
            if (_this.get('model.nickname')) {
              nickname = _this.get('model.nickname');
            } else {
              nickname = _this.get('model.my_sex');
            }
            data = {
              message: _this.get('message'),
              my_socket_id: _this.get('model.socket_id'),
              user_socket_id: _this.get('model.user_socket_id'),
              my_sex: nickname,
              my_faculty: _this.get('model.my_faculty')
            };
            _this.socket.emit('message', data);
            return _this.set('message', null);
          }
        };
      })(this));
    }
  }
});

export default ChatController;