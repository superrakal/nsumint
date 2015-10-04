import Ember from 'ember';
var ChatRoute;

ChatRoute = Ember.Route.extend({
  model: function model() {
    var id;
    id = $.cookie('user_id');
    return this.store.find('user', id);
  },
  afterModel: function afterModel(model) {
    return model.reload().then((function (_this) {
      return function () {
        if (model.get('status') !== 'chatting') {
          return _this.transitionTo('my_settings');
        } else {
          return _this.controllerFor("application").set('isChatting', true);
        }
      };
    })(this));
  },
  setupController: function setupController(controller, model) {
    return controller.set('model', model);
  }
});

export default ChatRoute;