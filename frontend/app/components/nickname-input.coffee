`import Ember from 'ember'`

NicknameInputComponent = Ember.Component.extend

  normalizeValue: (->
    if (@get 'value')
      @set 'value', (@get 'value').slice(0, 12)
  ).observes('value')

`export default NicknameInputComponent`
