define('frontend/tests/unit/initializers/register-socket-io-test', ['ember', 'frontend/initializers/register-socket-io', 'qunit'], function (Ember, register_socket_io, qunit) {

  'use strict';

  var application, registry;

  application = null;

  registry = null;

  qunit.module('Unit | Initializer | register socket io', {
    beforeEach: function beforeEach() {
      return Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        registry = application.registry;
        return application.deferReadiness();
      });
    }
  });

  qunit.test('it works', function (assert) {
    register_socket_io.initialize(registry, application);
    return assert.ok(true);
  });

});