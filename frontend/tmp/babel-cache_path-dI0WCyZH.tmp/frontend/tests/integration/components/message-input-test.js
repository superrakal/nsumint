import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('message-input', 'Integration | Component | message input', {
  integration: true
});

test('it renders', function (assert) {
  assert.expect(2);
  this.render(hbs("{{message-input}}"));
  assert.equal(this.$().text().trim(), '');
  this.render(hbs("{{#message-input}}\n  template block text\n{{/message-input}}"));
  return assert.equal(this.$().text().trim(), 'template block text');
});