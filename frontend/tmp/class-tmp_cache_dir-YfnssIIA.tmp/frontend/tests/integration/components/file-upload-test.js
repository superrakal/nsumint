define('frontend/tests/integration/components/file-upload-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('file-upload', 'Integration | Component | file upload', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{file-upload}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#file-upload}}\n  template block text\n{{/file-upload}}"));
    return assert.equal(this.$().text().trim(), 'template block text');
  });

});