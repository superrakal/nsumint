import Ember from 'ember';
var FileUploadComponent;

FileUploadComponent = Ember.Component.extend({
  socketIOService: Ember.inject.service('socket-io'),
  image_link: '',
  _init: (function () {
    this.set('store', this.get('parentView.targetObject.store'));
    return this.socket = this.get('socketIOService').socketFor('http://nsumint.ru:8080/');
  }).on('didInsertElement'),
  file_upload: function file_upload(file) {
    var reader;
    reader = new FileReader();
    reader.onloadend = (function (_this) {
      return function (e) {
        var fileToUpload;
        fileToUpload = e.target.result;
        return Ember.run(function () {
          var image;
          image = _this.get('value');
          return image.set('image', fileToUpload);
        });
      };
    })(this);
    return reader.readAsDataURL(file);
  },
  change: function change(evt) {
    var input;
    if (evt.target) {
      input = evt.target;
    } else {
      input = evt;
    }
    if (input.files && input.files[0]) {
      return this.file_upload(input.files[0]);
    }
  },
  actions: {
    openModal: function openModal() {
      var image, store;
      this.$('.modal').modal('show');
      store = this.get('store');
      image = store.createRecord('image');
      return this.set('value', image);
    },
    cancel: function cancel() {
      var image;
      image = this.get('value');
      image.unloadRecord();
      return this.$('.modal').modal('hide');
    },
    send: function send() {
      var data, image;
      if (this.get('image_link').length > 0) {
        data = {
          image_url: this.get('image_link'),
          my_socket_id: this.get('model.socket_id'),
          user_socket_id: this.get('model.user_socket_id')
        };
        this.socket.emit('image', data);
        this.set('image_link', '');
        return this.$('.modal').modal('hide');
      } else {
        image = this.get('value');
        if (image) {
          return image.save().then((function (_this) {
            return function () {
              image.reload();
              $('input').val("");
              data = {
                image_url: image.get('url'),
                my_socket_id: _this.get('model.socket_id'),
                user_socket_id: _this.get('model.user_socket_id')
              };
              _this.socket.emit('image', data);
              _this.$('.modal').modal('hide');
              _this.set('value', null);
              return Ember.run.later(function () {
                return image.destroyRecord();
              }, 10000);
            };
          })(this));
        }
      }
    }
  }
});

export default FileUploadComponent;