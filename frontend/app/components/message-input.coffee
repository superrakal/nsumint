`import Ember from 'ember'`

MessageInputComponent = Ember.Component.extend
  _initialize: (->
    $('textarea').keydown (e) =>
      if e.ctrlKey && e.keyCode == 13
        @set 'value', (@get 'value') + '\n'
      else if e.keyCode == 13
        $('form').submit()

  ).on('didInsertElement')

  isDisabled: (->
    !(@get 'disabled')
  ).property('disabled')

`export default MessageInputComponent`
