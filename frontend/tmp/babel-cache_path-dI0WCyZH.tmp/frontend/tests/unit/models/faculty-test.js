import { moduleForModel, test } from 'ember-qunit';
moduleForModel('faculty', 'Unit | Model | faculty', {
  needs: []
});

test('it exists', function (assert) {
  var model;
  model = this.subject();
  return assert.ok(!!model);
});