define('frontend/tests/integration/components/select-all-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('select-all', 'Integration | Component | select all', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{select-all}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#select-all}}\n  template block text\n{{/select-all}}"));
    return assert.equal(this.$().text().trim(), 'template block text');
  });

});