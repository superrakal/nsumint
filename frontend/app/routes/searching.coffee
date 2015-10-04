`import Ember from 'ember'`

SearchingRoute = Ember.Route.extend


  model: ->
    id = $.cookie('user_id')
    @store.find('user', id)

  afterModel: (model) ->
    if $.cookie('user_id') == undefined
      @transitionTo 'root'
    if ((model.get 'my_sex') == null) || ((model.get 'user_sex') == null)
      @transitionTo 'my_settings'
    else
      if ((model.get 'my_faculty') == null) || ((model.get 'user_faculties.length') == 0)
        @transitionTo 'user_settings'
      else
        if (model.get 'status') == 'chatting'
          @transitionTo 'chat'

  setupController: (controller, model) ->
    controller.set 'model', model
    controller.send 'startSearching'


`export default SearchingRoute`
