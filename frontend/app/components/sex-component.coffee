`import Ember from 'ember'`

SexComponentComponent = Ember.Component.extend

  class: (->
    if (@get 'value') == (@get 'sex')
     'active'
    else
     'inactive'
  ).property('value')

  actions:
    selectSex: (sex) ->
      @set 'value', sex


`export default SexComponentComponent`
