import Ember from 'ember';
import config from './config/environment';
var Router;

Router = Ember.Router.extend();

Router.map(function () {
  this.route('root', {
    path: '/'
  });
  this.route('my_settings');
  this.route('user_settings');
  this.route('searching');
  return this.route('chat');
});

export default Router;