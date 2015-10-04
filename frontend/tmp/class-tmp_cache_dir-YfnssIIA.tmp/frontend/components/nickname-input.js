define('frontend/components/nickname-input', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var NicknameInputComponent;

  NicknameInputComponent = Ember['default'].Component.extend({
    normalizeValue: (function () {
      if (this.get('value')) {
        return this.set('value', this.get('value').slice(0, 12));
      }
    }).observes('value')
  });

  exports['default'] = NicknameInputComponent;

});