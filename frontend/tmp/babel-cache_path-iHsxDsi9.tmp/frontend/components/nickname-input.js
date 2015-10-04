import Ember from 'ember';
var NicknameInputComponent;

NicknameInputComponent = Ember.Component.extend({
  normalizeValue: (function () {
    if (this.get('value')) {
      return this.set('value', this.get('value').slice(0, 12));
    }
  }).observes('value')
});

export default NicknameInputComponent;