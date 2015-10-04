define('frontend/initializers/reopen-async', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    Ember['default'].ContainerView.reopen({
      animationSequence: 'async',

      currentViewObserver: (function () {
        var activeView = this.get('activeView');
        if (activeView) {
          activeView.send('newView', this.get('newView'));
        }
      }).observes('newView')
    });
  }

  exports['default'] = {
    name: 'reopen-async',
    initialize: initialize
  };

});