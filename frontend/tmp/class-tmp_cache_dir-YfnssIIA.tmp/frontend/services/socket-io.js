define('frontend/services/socket-io', ['exports', 'ember', 'ember-websockets/helpers/socketio-proxy'], function (exports, Ember, SocketIOProxy) {

  'use strict';

  var filter = Array.prototype.filter;
  var forEach = Array.prototype.forEach;

  exports['default'] = Ember['default'].Service.extend({
    /*
    * Each element in the array is of the form:
    *
    * {
    *    url: 'string'
    *    socket: SocketIO Proxy object
    * }
    */
    sockets: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.sockets = Ember['default'].A();
    },

    /*
    * socketFor returns a socketio proxy object. On this object there is a property `socket`
    * which contains the actual socketio object. This socketio object is cached based off of the
    * url meaning multiple requests for the same socket will return the same object.
    */
    socketFor: function socketFor(url) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var proxy = this.findSocketInCache(this.get('sockets'), url);

      if (proxy && this.socketIsNotClosed(proxy.socket)) {
        return proxy.socket;
      }

      proxy = SocketIOProxy['default'].create({
        content: this,
        socket: io(this.normalizeURL(url), options)
      });

      this.get('sockets').pushObject({
        url: this.normalizeURL(url),
        socket: proxy
      });

      return proxy;
    },

    /*
    * The native websocket object will transform urls without a pathname to have just a /.
    * As an example: ws://nsumint.ru:8080 would actually be ws://nsumint.ru:8080/ but ws://example.com/foo would not
    * change. This function does this transformation to stay inline with the native websocket implementation.
    *
    */
    normalizeURL: function normalizeURL(url) {
      var parsedUrl = new URI(url);

      if (parsedUrl.path() === '/' && url.slice(-1) !== '/') {
        return url + '/';
      }

      return url;
    },

    socketIsNotClosed: function socketIsNotClosed(socket) {
      return socket.socket.io.readyState !== 'closed';
    },

    /*
    * closeSocketFor closes the socket for a given url.
    */
    closeSocketFor: function closeSocketFor(url) {
      var _this = this;

      var filteredSockets = [];

      forEach.call(this.get('sockets'), function (item) {
        if (item.url === _this.normalizeURL(url)) {
          item.socket.close();
        } else {
          filteredSockets.push(item);
        }
      });

      this.set('sockets', filteredSockets);
    },

    /*
    * Returns the socket object from the cache if one matches the url else undefined
    */
    findSocketInCache: function findSocketInCache(socketsCache, url) {
      var _this2 = this;

      var cachedResults = filter.call(socketsCache, function (websocket) {
        return websocket['url'] === _this2.normalizeURL(url);
      });

      if (cachedResults.length > 0) {
        return cachedResults[0];
      }
    }
  });

});