define('frontend/tests/unit/controllers/user-settings-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:user-settings', {});

  ember_qunit.test('it exists', function (assert) {
    var controller;
    controller = this.subject();
    return assert.ok(controller);
  });

});