`import Ember from 'ember'`

ChatController = Ember.Controller.extend
  socketIOService: Ember.inject.service('socket-io')
  needs: ['application']
  message: ''
  timer: null
  user_typing: false
  typing_class: 'not-displaying'

  init: ->
    @_super.apply(this, arguments)
    @socket = this.get('socketIOService').socketFor('http://nsumint.ru:8080/')
    ion.sound
      sounds: [
        { name: 'water_droplet' }
        { name: 'water_droplet_2' }
        { name: 'water_droplet_3' }
      ]
      path: '/sounds/'
      preload: true

    @socket.on 'my message', (message) =>
      message = message.replace(/(http:\/\/[.\w/=&?]+)/gi, "<a href='$1'>$1</a>").replace(/\n/g, "<br>")
      time = (new Date()).toLocaleTimeString()
      $(".chatbox-wrapper .messages").append("<div class='message_wrapper'><div class='bubble message my_message pull-left'><div class='message_title'><div class='pull-left'>Вы</div><div class='time pull-right'><i class='fa fa-clock-o'>&nbsp;"+time+"</i></div></div><div class='message_body'>"+message+"</div></div><br class='clear'></div>")
      $('.chatbox-wrapper').animate { scrollTop: $('.chatbox-wrapper')[0].scrollHeight }, 200
      ion.sound.play("water_droplet_3")

    @socket.on 'my image', (image_url) =>
      time = (new Date()).toLocaleTimeString()
      $(".chatbox-wrapper .messages").append("<div class='message_wrapper'><div class='bubble message my_message pull-left'><div class='message_title'><div class='pull-left'>Вы</div><div class='time pull-right'><i class='fa fa-clock-o'>&nbsp;"+time+"</i></div></div><div class='message_body'><img src='"+image_url+" ' class='img-responsive img-thumbnail'></div></div><br class='clear'></div>")
      $('.chatbox-wrapper').animate { scrollTop: $('.chatbox-wrapper')[0].scrollHeight }, 200
      ion.sound.play("water_droplet_3")

    @socket.on 'user image', (image_url) =>
      time = (new Date()).toLocaleTimeString()
      $(".chatbox-wrapper .messages").append("<div class='message_wrapper'><div class='bubble message user_message pull-right'><div class='message_title'><div class='pull-left'>Аноним</div><div class='time pull-right'><i class='fa fa-clock-o'>&nbsp;"+time+"</i></div></div><div class='message_body'><img src='"+image_url+" ' class='img-responsive img-thumbnail'></div></div><br class='clear'></div>")
      $('.chatbox-wrapper').animate { scrollTop: $('.chatbox-wrapper')[0].scrollHeight }, 200
      ion.sound.play("water_droplet_2")

    @socket.on 'user message', (nickname, user_faculty, message) =>
      message = message.replace(/(http:\/\/[.\w/=&?]+)/gi, "<a href='$1'>$1</a>").replace(/\n/g, "<br>")
      if nickname == 'male'
          user_nickname = 'Парень'
      else
        if nickname == 'female'
          user_nickname = 'Девушка'
        else
          user_nickname = nickname
      title = user_nickname + ' с ' + user_faculty.name
      time = (new Date()).toLocaleTimeString()
      $(".chatbox-wrapper .messages").append("<div class='message_wrapper'><div class='bubble message user_message pull-right'><div class='message_title'><div class='pull-left'>"+title+"</div><div class='time pull-right'><i class='fa fa-clock-o'>&nbsp;"+time+"</i></div></div><div class='message_body'>"+message+"</div></div><br class='clear'></div>")
      $('.chatbox-wrapper').animate { scrollTop: $('.chatbox-wrapper')[0].scrollHeight }, 200
      ion.sound.play("water_droplet_2")

    @socket.on 'user reconnected', =>
      $(".chatbox-wrapper .messages").append("<div class='alert alert-warning alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button><p>NSUMINT: Собеседник переподключился</p></div>")
      $('.chatbox-wrapper').animate { scrollTop: $('.chatbox-wrapper')[0].scrollHeight }, 200

    @socket.on 'user disconnected', =>
      $(".chatbox-wrapper .messages").append("<div class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button><p>NSUMINT: К сожалению соединение с вашим собеседником разорвано. Вы можете подождать, вероятно он просто случайно закрыл браузер.</p></div>")
      $('.chatbox-wrapper').animate { scrollTop: $('.chatbox-wrapper')[0].scrollHeight }, 200

    @socket.on 'dialog ended', =>
      @get('controllers.application').set('isChatting', false)
      @set 'user_typing', false
      @set 'typing_class', 'not-displaying'
      (@get 'model').set 'status', 'online'
      (@get 'model').set 'user_socket_id', ''
      (@get 'model').save()
      $(".chatbox-wrapper .messages").append("<div class='alert alert-info alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button><p>NSUMINT: Собеседник завершил диалог</p></div>")
      $('.chatbox-wrapper').animate { scrollTop: $('.chatbox-wrapper')[0].scrollHeight }, 200
      ion.sound.play("water_droplet")

    @socket.on 'user start typing', =>
      @set 'typing_class', 'fadeIn'
      @set 'user_typing', true

    @socket.on 'user stop typing', =>
      @set 'typing_class', 'fadeOut'
      @set 'user_typing', false

  changeMessage: (->
    @socket.emit('user start typing', (@get 'model.user_socket_id'))
    clearTimeout(@get 'timer')
    @set 'timer', setTimeout((=>
      @socket.emit('user stop typing', (@get 'model.user_socket_id'))
    ), 3000)

  ).observes('this.message')

  dialogEndEvent: (->
    if (@get 'model.status') == 'online'
      @set 'user_typing', false
      @set 'typing_class', 'not-displaying'
  ).observes('model.status')

  actions:
    sendMessage: ->
      (@get 'model').reload().then =>
        if (@get 'message.length') > 0
          message = @get 'message'
          message.replace(/<[^>]+>/g,'')
          @set 'message', message
          if (@get 'model.nickname')
            nickname = (@get 'model.nickname')
          else
            nickname = (@get 'model.my_sex')
          data = {message: (@get 'message'), my_socket_id: (@get 'model.socket_id'), user_socket_id: (@get 'model.user_socket_id'), my_sex: nickname, my_faculty: (@get 'model.my_faculty')}
          @socket.emit('message', data)
          @set 'message', null

`export default ChatController`
