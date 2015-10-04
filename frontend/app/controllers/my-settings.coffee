`import Ember from 'ember'`

MySettingsController = Ember.Controller.extend
  socketIOService: Ember.inject.service('socket-io')

  init: ->
    @_super.apply(this, arguments)
    socket = this.get('socketIOService').socketFor('http://nsumint.ru:8080/')

  actions:
    save: ->
      (@get 'model').save()
      @transitionTo 'user_settings'

`export default MySettingsController`
