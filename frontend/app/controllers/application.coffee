`import Ember from 'ember'`

ApplicationController = Ember.Controller.extend
  socketIOService: Ember.inject.service('socket-io')
  isChatting: false
  connectCounter: 0

  init: ->
    @_super.apply(this, arguments)
    @socket = this.get('socketIOService').socketFor('http://nsumint.ru:8080/')
    ion.sound
      sounds: [
        { name: 'water_droplet' }
      ]
      path: '/sounds/'
      preload: true

    @socket.on 'connectCounter changes', (connectCounter) =>
      @set 'connectCounter', connectCounter

    @socket.on 'client connected', (socket_id) =>
      data = {user_socket: (@get 'model.user_socket_id'), new_socket: socket_id}
      @socket.emit('user reconnected', data)
      (@get 'model').set 'socket_id', socket_id
      (@get 'model').save()

    @socket.on 'user reconnected', (new_socket) =>
      (@get 'model').set 'user_socket_id', new_socket
      (@get 'model').save()

  actions:
    endDialog: ->
      (@get 'model').reload().then =>
        @socket.emit('end dialog', (@get 'model.user_socket_id'))
        @set 'isChatting', false
        (@get 'model').set 'status', 'online'
        (@get 'model').set 'user_socket_id', ''
        (@get 'model').save()
        $(".chatbox-wrapper .messages").append("<div class='alert alert-info alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button><p>NSUMINT: Вы завершили диалог</p></div>")
        $('.chatbox-wrapper').animate { scrollTop: $('.chatbox-wrapper')[0].scrollHeight }, 200
        ion.sound.play("water_droplet")

`export default ApplicationController`
