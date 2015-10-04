`import Ember from 'ember'`

SelectAllComponent = Ember.Component.extend
  actions:
    selectAll: ->
      $('.faculty button.inactive').click()
`export default SelectAllComponent`
