import { moduleForModel, test } from 'ember-qunit';
moduleForModel('application', 'Unit | Serializer | application', {
  needs: ['serializer:application']
});

test('it serializes records', function (assert) {
  var record, serializedRecord;
  record = this.subject();
  serializedRecord = record.serialize();
  return assert.ok(serializedRecord);
});