`import Ember from 'ember'`

RootRoute = Ember.Route.extend
  activate: ->
    @transitionTo 'my_settings'

`export default RootRoute`
