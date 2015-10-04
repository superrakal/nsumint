import Ember from 'ember';
var UserSettingsRoute;

UserSettingsRoute = Ember.Route.extend({
  beforeModel: function beforeModel() {
    return this.store.find('faculty');
  },
  model: function model() {
    var id;
    id = $.cookie('user_id');
    return this.store.find('user', id);
  },
  afterModel: function afterModel(model) {
    if (model.get('status') === 'chatting') {
      return this.transitionTo('chat');
    }
  },
  setupController: function setupController(controller, model) {
    controller.set('faculties', this.store.all('faculty'));
    return controller.set('model', model);
  }
});

export default UserSettingsRoute;