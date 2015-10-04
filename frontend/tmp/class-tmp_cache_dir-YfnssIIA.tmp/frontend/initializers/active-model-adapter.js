define('frontend/initializers/active-model-adapter', ['exports', 'active-model-adapter', 'active-model-adapter/active-model-serializer'], function (exports, ActiveModelAdapter, ActiveModelSerializer) {

  'use strict';

  exports['default'] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', ActiveModelAdapter['default']);
      application.register('serializer:-active-model', ActiveModelSerializer['default']);
    }
  };

});