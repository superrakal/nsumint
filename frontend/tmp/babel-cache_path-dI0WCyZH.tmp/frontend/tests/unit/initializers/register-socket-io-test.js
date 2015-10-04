import Ember from 'ember';
import { initialize } from '../../../initializers/register-socket-io';
import { module, test } from 'qunit';
var application, registry;

application = null;

registry = null;

module('Unit | Initializer | register socket io', {
  beforeEach: function beforeEach() {
    return Ember.run(function () {
      application = Ember.Application.create();
      registry = application.registry;
      return application.deferReadiness();
    });
  }
});

test('it works', function (assert) {
  initialize(registry, application);
  return assert.ok(true);
});