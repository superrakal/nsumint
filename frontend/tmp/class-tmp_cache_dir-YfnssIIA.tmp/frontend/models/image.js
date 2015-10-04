define('frontend/models/image', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Image;

  Image = DS['default'].Model.extend({
    image: DS['default'].attr('string'),
    url: DS['default'].attr('string')
  });

  exports['default'] = Image;

});