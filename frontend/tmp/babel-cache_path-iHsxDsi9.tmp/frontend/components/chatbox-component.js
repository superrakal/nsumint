import Ember from 'ember';
var ChatboxComponentComponent;

ChatboxComponentComponent = Ember.Component.extend({
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

export default ChatboxComponentComponent;