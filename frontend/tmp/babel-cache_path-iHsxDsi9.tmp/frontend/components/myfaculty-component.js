import Ember from 'ember';
var MyfacultyComponentComponent;

MyfacultyComponentComponent = Ember.Component.extend({
  "class": (function () {
    if (this.get('value') === this.get('faculty')) {
      return 'active';
    } else {
      return 'inactive';
    }
  }).property('value'),
  actions: {
    selectFaculty: function selectFaculty(faculty, model) {
      return this.set('value', faculty);
    }
  }
});

export default MyfacultyComponentComponent;