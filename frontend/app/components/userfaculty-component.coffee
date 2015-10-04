`import Ember from 'ember'`

UserfacultyComponentComponent = Ember.Component.extend
  class: (->
    isIn = false
    if (@get 'value.content.currentState.length')
      for i in [0.. (@get 'value.content.currentState.length')-1]
        if (@get 'faculty.id') == (@get 'value.content.currentState')[i].id
          isIn = true
    if isIn
      'active'
    else
      'inactive'
  ).property('value.content.currentState.length')

  actions:
    toggleFaculty: ->
      isIn = false
      if (@get 'value.content.currentState.length')
        for i in [0.. (@get 'value.content.currentState.length')-1]
          if (@get 'faculty.id') == (@get 'value.content.currentState')[i].id
            isIn = true
      if isIn
        (@get 'value').removeObject (@get 'faculty')
      else
        (@get 'value').pushObject (@get 'faculty')


`export default UserfacultyComponentComponent`
