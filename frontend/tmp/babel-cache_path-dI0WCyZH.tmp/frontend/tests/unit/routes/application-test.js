import { moduleFor, test } from 'ember-qunit';
moduleFor('route:application', 'Unit | Route | application', {});

test('it exists', function (assert) {
  var route;
  route = this.subject();
  return assert.ok(route);
});