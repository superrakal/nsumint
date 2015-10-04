define('frontend/serializers/user', ['exports', 'ember-data', 'active-model-adapter'], function (exports, DS, active_model_adapter) {

  'use strict';

  var UserSerializer;

  UserSerializer = active_model_adapter.ActiveModelSerializer.extend(DS['default'].EmbeddedRecordsMixin, {
    attrs: {
      user_faculties: {
        embedded: 'always'
      }
    }
  });

  exports['default'] = UserSerializer;

});