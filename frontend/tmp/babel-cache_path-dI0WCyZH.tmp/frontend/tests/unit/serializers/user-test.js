import { moduleForModel, test } from 'ember-qunit';
moduleForModel('user', 'Unit | Serializer | user', {
  needs: ['serializer:user']
});

test('it serializes records', function (assert) {
  var record, serializedRecord;
  record = this.subject();
  serializedRecord = record.serialize();
  return assert.ok(serializedRecord);
});