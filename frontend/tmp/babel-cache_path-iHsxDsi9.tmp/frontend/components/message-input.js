import Ember from 'ember';
var MessageInputComponent;

MessageInputComponent = Ember.Component.extend({
  _initialize: (function () {
    return $('textarea').keydown((function (_this) {
      return function (e) {
        if (e.ctrlKey && e.keyCode === 13) {
          return _this.set('value', _this.get('value') + '\n');
        } else if (e.keyCode === 13) {
          return $('form').submit();
        }
      };
    })(this));
  }).on('didInsertElement'),
  isDisabled: (function () {
    return !this.get('disabled');
  }).property('disabled')
});

export default MessageInputComponent;