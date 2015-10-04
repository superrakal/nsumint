define('frontend/components/select-all', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var SelectAllComponent;

  SelectAllComponent = Ember['default'].Component.extend({
    actions: {
      selectAll: function selectAll() {
        return $('.faculty button.inactive').click();
      }
    }
  });

  exports['default'] = SelectAllComponent;

});