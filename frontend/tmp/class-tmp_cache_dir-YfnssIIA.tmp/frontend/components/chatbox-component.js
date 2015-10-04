define('frontend/components/chatbox-component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ChatboxComponentComponent;

  ChatboxComponentComponent = Ember['default'].Component.extend({
    initialize: (function () {
      var height;
      $(window).resize(function () {
        var height;
        if ($(window).height() < 600) {
          height = $(window).height() - 50 - 50 - 110;
        } else {
          height = $(window).height() - 50 - 50 - 200;
        }
        return this.$('.chatbox-wrapper').height(height);
      });
      if ($(window).height() < 600) {
        height = $(window).height() - 50 - 50 - 110;
      } else {
        height = $(window).height() - 50 - 50 - 200;
      }
      this.$('.chatbox-wrapper').height(height);
      return this.$('.chatbox-wrapper').niceScroll();
    }).on('didInsertElement')
  });

  exports['default'] = ChatboxComponentComponent;

});