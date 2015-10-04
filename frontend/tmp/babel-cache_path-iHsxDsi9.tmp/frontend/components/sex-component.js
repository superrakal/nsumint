import Ember from 'ember';
var SexComponentComponent;

SexComponentComponent = Ember.Component.extend({
  "class": (function () {
    if (this.get('value') === this.get('sex')) {
      return 'active';
    } else {
      return 'inactive';
    }
  }).property('value'),
  actions: {
    selectSex: function selectSex(sex) {
      return this.set('value', sex);
    }
  }
});

export default SexComponentComponent;