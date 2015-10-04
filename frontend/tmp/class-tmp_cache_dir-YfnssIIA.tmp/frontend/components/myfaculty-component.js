define('frontend/components/myfaculty-component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MyfacultyComponentComponent;

  MyfacultyComponentComponent = Ember['default'].Component.extend({
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

  exports['default'] = MyfacultyComponentComponent;

});