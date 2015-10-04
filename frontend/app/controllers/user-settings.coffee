`import Ember from 'ember'`

UserSettingsController = Ember.Controller.extend
  actions:
    save: ->
      (@get 'model').save()
      @transitionTo 'searching'
`export default UserSettingsController`
