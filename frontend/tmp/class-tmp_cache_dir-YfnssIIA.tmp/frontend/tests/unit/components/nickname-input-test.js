define('frontend/tests/unit/components/nickname-input-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('nickname-input', {});

  ember_qunit.test('it renders', function (assert) {
    var component;
    assert.expect(2);
    component = this.subject();
    assert.equal(component._state, 'preRender');
    this.render();
    return assert.equal(component._state, 'inDOM');
  });

});