`import Ember from 'ember'`

MyfacultyComponentComponent = Ember.Component.extend
  class: (->
    if (@get 'value') == (@get 'faculty')
      'active'
    else
      'inactive'
  ).property('value')

  actions:
    selectFaculty: (faculty, model) ->
      @set 'value', faculty

`export default MyfacultyComponentComponent`
