define('frontend/tests/integration/components/userfaculty-component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('userfaculty-component', 'Integration | Component | userfaculty component', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{userfaculty-component}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#userfaculty-component}}\n  template block text\n{{/userfaculty-component}}"));
    return assert.equal(this.$().text().trim(), 'template block text');
  });

});