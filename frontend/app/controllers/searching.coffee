`import Ember from 'ember'`

SearchingController = Ember.Controller.extend
  isSearching: true
  socketIOService: Ember.inject.service('socket-io')

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

    @socket.on 'user found', =>
      ion.sound.play("water_droplet")
      @transitionTo 'chat'

  actions:
    stopSearching: ->
      user = @get 'model'
      user.set 'status', 'online'
      user.save().then =>
        @set 'isSearching', false

    startSearching: ->
      user = @get 'model'
      user.set 'status', 'searching'
      user.save().then =>
        $.ajax
          type: 'POST'
          url: 'api/v1/users/search_user'
          data: 'id='+user.get 'id'
          statusCode:
            200: (data) =>
              @socket.emit('dialog start', data.user.socket_id)
              ion.sound.play("water_droplet")
              @transitionTo 'chat'
            205: =>
              @set 'isSearching', true

`export default SearchingController`
