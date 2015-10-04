`import Ember from 'ember'`

ChatboxComponentComponent = Ember.Component.extend

  initialize: (->
    $(window).resize ->
      if $(window).height() < 600
        height = $(window).height() - 50 - 50 - 110
      else
        height = $(window).height() - 50 - 50 - 200
      @$('.chatbox-wrapper').height(height)
    if $(window).height() < 600
      height = $(window).height() - 50 - 50 - 110
    else
      height = $(window).height() - 50 - 50 - 200
    @$('.chatbox-wrapper').height(height)
    @$('.chatbox-wrapper').niceScroll()
  ).on('didInsertElement')


`export default ChatboxComponentComponent`
