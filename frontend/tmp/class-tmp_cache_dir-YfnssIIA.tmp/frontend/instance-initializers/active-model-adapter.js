define('frontend/instance-initializers/active-model-adapter', ['exports', 'active-model-adapter', 'active-model-adapter/active-model-serializer'], function (exports, ActiveModelAdapter, ActiveModelSerializer) {

  'use strict';

  exports['default'] = {
    name: 'active-model-adapter',
    initialize: function initialize(applicationOrRegistry) {
      var registry;
      if (applicationOrRegistry.registry) {
        // initializeStoreService was registered with an
        // instanceInitializer. The first argument is the application
        // instance.
        registry = applicationOrRegistry.registry;
      } else {
        // initializeStoreService was called by an initializer instead of
        // an instanceInitializer. The first argument is a registy. This
        // case allows ED to support Ember pre 1.12
        registry = applicationOrRegistry;
      }

      registry.register('adapter:-active-model', ActiveModelAdapter['default']);
      registry.register('serializer:-active-model', ActiveModelSerializer['default']);
    }
  };

});