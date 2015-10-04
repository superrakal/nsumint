import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('mysex-component', 'Integration | Component | mysex component', {
  integration: true
});

test('it renders', function (assert) {
  assert.expect(2);
  this.render(hbs("{{mysex-component}}"));
  assert.equal(this.$().text().trim(), '');
  this.render(hbs("{{#mysex-component}}\n  template block text\n{{/mysex-component}}"));
  return assert.equal(this.$().text().trim(), 'template block text');
});