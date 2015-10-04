import Ember from 'ember';
var ApplicationRoute;

ApplicationRoute = Ember.Route.extend({
  model: function model() {
    var id, user;
    if ($.cookie('user_id') !== void 0) {
      user = this.store.find('user', $.cookie('user_id'));
      user["catch"]((function (_this) {
        return function () {
          $.removeCookie('user_id');
          return window.location.href = '/';
        };
      })(this));
    }
    if ($.cookie('user_id') === void 0) {
      return this.store.createRecord('user');
    } else {
      id = $.cookie('user_id');
      return this.store.find('user', id);
    }
  },
  afterModel: function afterModel(model) {
    if (model.get('status') === 'chatting') {
      this.transitionTo('chat');
    }
    return model.save().then(function () {
      return $.cookie('user_id', model.id);
    });
  }
});

export default ApplicationRoute;