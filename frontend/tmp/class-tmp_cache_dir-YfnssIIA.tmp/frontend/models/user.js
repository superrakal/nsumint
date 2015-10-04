define('frontend/models/user', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var User;

  User = DS['default'].Model.extend({
    my_sex: DS['default'].attr('string'),
    user_sex: DS['default'].attr('string'),
    status: DS['default'].attr('string', {
      defaultValue: 'created'
    }),
    socket_id: DS['default'].attr('string'),
    user_socket_id: DS['default'].attr('string'),
    nickname: DS['default'].attr('string'),
    my_faculty: DS['default'].belongsTo('faculty'),
    user_faculties: DS['default'].hasMany('faculty', {
      async: true
    })
  });

  exports['default'] = User;

});