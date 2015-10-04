import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('myfaculty-component', 'Integration | Component | myfaculty component', {
  integration: true
});

test('it renders', function (assert) {
  assert.expect(2);
  this.render(hbs("{{myfaculty-component}}"));
  assert.equal(this.$().text().trim(), '');
  this.render(hbs("{{#myfaculty-component}}\n  template block text\n{{/myfaculty-component}}"));
  return assert.equal(this.$().text().trim(), 'template block text');
});