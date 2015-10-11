/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-ratchet': {
      'theme': 'ios'
    }
  });

  return app.toTree();
};