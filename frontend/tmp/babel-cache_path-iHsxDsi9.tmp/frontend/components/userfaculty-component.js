import Ember from 'ember';
var UserfacultyComponentComponent;

UserfacultyComponentComponent = Ember.Component.extend({
  "class": (function () {
    var i, isIn, j, ref;
    isIn = false;
    if (this.get('value.content.currentState.length')) {
      for (i = j = 0, ref = this.get('value.content.currentState.length') - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        if (this.get('faculty.id') === this.get('value.content.currentState')[i].id) {
          isIn = true;
        }
      }
    }
    if (isIn) {
      return 'active';
    } else {
      return 'inactive';
    }
  }).property('value.content.currentState.length'),
  actions: {
    toggleFaculty: function toggleFaculty() {
      var i, isIn, j, ref;
      isIn = false;
      if (this.get('value.content.currentState.length')) {
        for (i = j = 0, ref = this.get('value.content.currentState.length') - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
          if (this.get('faculty.id') === this.get('value.content.currentState')[i].id) {
            isIn = true;
          }
        }
      }
      if (isIn) {
        return this.get('value').removeObject(this.get('faculty'));
      } else {
        return this.get('value').pushObject(this.get('faculty'));
      }
    }
  }
});

export default UserfacultyComponentComponent;