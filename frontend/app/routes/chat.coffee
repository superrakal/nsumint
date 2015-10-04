`import Ember from 'ember'`

ChatRoute = Ember.Route.extend

  beforeModel :->
    @store.find('sticker')

  model: ->
    id = $.cookie('user_id')
    @store.find('user', id)

  afterModel: (model)->
    model.reload().then =>
      if (model.get 'status') != 'chatting'
        @transitionTo 'my_settings'
      else
        @controllerFor("application").set('isChatting', true)

  setupController: (controller, model) ->
    controller.set 'stickers', @store.all('sticker')
    controller.set 'model', model

`export default ChatRoute`
