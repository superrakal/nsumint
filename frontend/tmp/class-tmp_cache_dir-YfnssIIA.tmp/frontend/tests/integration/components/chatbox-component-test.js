define('frontend/tests/integration/components/chatbox-component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('chatbox-component', 'Integration | Component | chatbox component', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{chatbox-component}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#chatbox-component}}\n  template block text\n{{/chatbox-component}}"));
    return assert.equal(this.$().text().trim(), 'template block text');
  });

});