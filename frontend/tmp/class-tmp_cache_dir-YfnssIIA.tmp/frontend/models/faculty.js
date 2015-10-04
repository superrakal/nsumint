define('frontend/models/faculty', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Faculty;

  Faculty = DS['default'].Model.extend({
    name: DS['default'].attr('string')
  });

  exports['default'] = Faculty;

});