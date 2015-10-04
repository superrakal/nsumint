define('frontend/components/sex-component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var SexComponentComponent;

  SexComponentComponent = Ember['default'].Component.extend({
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

  exports['default'] = SexComponentComponent;

});