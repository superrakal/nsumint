define('frontend/tests/integration/components/nickname-input-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('nickname-input', 'Integration | Component | nickname input', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{nickname-input}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#nickname-input}}\n  template block text\n{{/nickname-input}}"));
    return assert.equal(this.$().text().trim(), 'template block text');
  });

});