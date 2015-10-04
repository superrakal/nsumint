define('frontend/lib/cookie', ['exports', 'ember'], function (exports, Em) {

  'use strict';

  exports['default'] = Em['default'].Object.extend({
    setCookie: function setCookie(key, value, options) {
      return new Em['default'].RSVP.Promise(function (resolve, reject) {
        try {
          Em['default'].$.cookie(key, value, options);
          Em['default'].run(null, resolve);
        } catch (e) {
          Em['default'].run(null, reject, e);
        }
      });
    },

    getCookie: function getCookie(key) {
      return Em['default'].$.cookie(key);
    },

    removeCookie: function removeCookie(key, options) {
      return Em['default'].$.removeCookie(key, options);
    }
  });

});