import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('chatbox-component', 'Integration | Component | chatbox component', {
  integration: true
});

test('it renders', function (assert) {
  assert.expect(2);
  this.render(hbs("{{chatbox-component}}"));
  assert.equal(this.$().text().trim(), '');
  this.render(hbs("{{#chatbox-component}}\n  template block text\n{{/chatbox-component}}"));
  return assert.equal(this.$().text().trim(), 'template block text');
});