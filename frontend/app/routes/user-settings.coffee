`import Ember from 'ember'`

UserSettingsRoute = Ember.Route.extend
  beforeModel: ->
    @store.find('faculty')

  model: ->
    id = $.cookie('user_id')
    @store.find('user', id)

  afterModel: (model) ->
    if (model.get 'status') == 'chatting'
      @transitionTo 'chat'

  setupController: (controller, model) ->
    controller.set 'faculties', @store.all('faculty')
    controller.set 'model', model

`export default UserSettingsRoute`
