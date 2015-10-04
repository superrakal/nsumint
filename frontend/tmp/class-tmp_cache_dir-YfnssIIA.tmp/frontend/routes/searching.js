define('frontend/routes/searching', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var SearchingRoute;

  SearchingRoute = Ember['default'].Route.extend({
    model: function model() {
      var id;
      id = $.cookie('user_id');
      return this.store.find('user', id);
    },
    afterModel: function afterModel(model) {
      if ($.cookie('user_id') === void 0) {
        this.transitionTo('root');
      }
      if (model.get('my_sex') === null || model.get('user_sex') === null) {
        return this.transitionTo('my_settings');
      } else {
        if (model.get('my_faculty') === null || model.get('user_faculties.length') === 0) {
          return this.transitionTo('user_settings');
        } else {
          if (model.get('status') === 'chatting') {
            return this.transitionTo('chat');
          }
        }
      }
    },
    setupController: function setupController(controller, model) {
      controller.set('model', model);
      return controller.send('startSearching');
    }
  });

  exports['default'] = SearchingRoute;

});