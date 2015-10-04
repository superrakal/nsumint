define('frontend/serializers/application', ['exports', 'ember-data', 'active-model-adapter'], function (exports, DS, active_model_adapter) {

	'use strict';

	var ApplicationSerializer;

	ApplicationSerializer = active_model_adapter.ActiveModelSerializer.extend();

	exports['default'] = ApplicationSerializer;

});