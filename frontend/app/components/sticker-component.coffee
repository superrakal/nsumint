`import Ember from 'ember'`

StickerComponentComponent = Ember.Component.extend


  isActiveSticker: (->
    if (@get 'sticker.url') == (@get 'value')
      'active'
    else
      'inactive'
  ).property('value')

  actions:
    chooseSticker: (url) ->
      @set 'value', url

`export default StickerComponentComponent`
