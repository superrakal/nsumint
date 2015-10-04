define('frontend/tests/unit/serializers/user-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('user', 'Unit | Serializer | user', {
    needs: ['serializer:user']
  });

  ember_qunit.test('it serializes records', function (assert) {
    var record, serializedRecord;
    record = this.subject();
    serializedRecord = record.serialize();
    return assert.ok(serializedRecord);
  });

});