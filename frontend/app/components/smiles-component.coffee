`import Ember from 'ember'`

SmilesComponentComponent = Ember.Component.extend
  value: ''
  socketIOService: Ember.inject.service('socket-io')

  _init: (->
    @socket = this.get('socketIOService').socketFor('http://nsumint.ru:8080/')
  ).on('didInsertElement')


  actions:
    openModal: ->
      @$('#smiles.modal').modal('show')

    cancel: ->
      @$('#smiles.modal').modal('hide')

    send: ->
      data = {image_url:(@get 'value'), my_socket_id: (@get 'model.socket_id'), user_socket_id: (@get 'model.user_socket_id')}
      @socket.emit('image', data)
      @$('#smiles.modal').modal('hide')




`export default SmilesComponentComponent`
