`import Ember from 'ember'`

FileUploadComponent = Ember.Component.extend
  socketIOService: Ember.inject.service('socket-io')
  image_link: ''

  _init: (->
    @set 'store', @get('parentView.targetObject.store')
    @socket = this.get('socketIOService').socketFor('http://nsumint.ru:8080/')
  ).on('didInsertElement')

  file_upload: (file)->
    reader = new FileReader()
    reader.onloadend = (e)=>
      fileToUpload = e.target.result
      Ember.run =>
        image = @get 'value'
        image.set('image', fileToUpload)

    return reader.readAsDataURL(file)

  change: (evt)->
    if evt.target
      input = evt.target
    else
      input = evt
    if input.files && input.files[0]
      @file_upload(input.files[0])

  actions:
    openModal: ->
      @$('.modal').modal('show')
      store = @get 'store'
      image = store.createRecord('image')
      @set 'value', image

    cancel: ->
      image = @get 'value'
      image.unloadRecord()
      @$('.modal').modal('hide')

    send: ->
      if (@get 'image_link').length > 0
        data = {image_url:(@get 'image_link'), my_socket_id: (@get 'model.socket_id'), user_socket_id: (@get 'model.user_socket_id')}
        @socket.emit('image', data)
        @set 'image_link', ''
        @$('.modal').modal('hide')
      else
        image = @get 'value'
        if image
          image.save().then  =>
            image.reload()
            $('input').val("")
            data = {image_url: image.get('url'), my_socket_id: (@get 'model.socket_id'), user_socket_id: (@get 'model.user_socket_id')}
            @socket.emit('image', data)
            @$('.modal').modal('hide')
            @set 'value', null
            Ember.run.later(( ->
              image.destroyRecord()
            ), 10000)

`export default FileUploadComponent`
