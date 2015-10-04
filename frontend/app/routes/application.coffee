`import Ember from 'ember'`

ApplicationRoute = Ember.Route.extend

  model: ->
    if $.cookie('user_id') != undefined
      user = @store.find('user', $.cookie('user_id'))
      user.catch(
        ()=>
          $.removeCookie('user_id')
          window.location.href = '/'
      )

    if $.cookie('user_id') == undefined
      @store.createRecord('user')
    else
      id = $.cookie('user_id')
      @store.find('user', id)

  afterModel: (model) ->
    if (model.get 'status') == 'chatting'
      @transitionTo 'chat'
    model.save().then ->
      $.cookie('user_id', model.id)

`export default ApplicationRoute`
