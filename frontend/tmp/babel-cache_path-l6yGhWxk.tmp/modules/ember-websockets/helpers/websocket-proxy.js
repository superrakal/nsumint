import Ember from 'ember';

var events = ['close', 'error', 'message', 'open'];
var filter = Array.prototype.filter;
var indexOf = Array.prototype.indexOf;
var forEach = Array.prototype.forEach;

export default Ember.ObjectProxy.extend({
  /*
  * {
  *    url: 'String'
  *    type: 'String' (such as 'open', 'message', 'close', and 'error')
  *    callback: The function to envoke
  *    context: The context of the function
  * }
  */
  listeners: null,

  protocols: null,

  init: function init() {
    this._super.apply(this, arguments);
    this.listeners = Ember.makeArray();
    this.setupInternalListeners();
  },

  /*
  * Adds a callback function into the listeners array which will
  * be invoked later whenever a given `type` event happens.
  *
  * type: must be either 'open', 'message', 'close', 'error'
  */
  on: function on(type, callback, context) {
    Ember.assert(type + ' is not a recognized event name. Please use on of the following: ' + events.join(', '), indexOf.call(events, type) !== -1);
    Ember.assert('The second argument must be a function.', Ember.typeOf(callback) === 'function');
    Ember.assert('The third argument must be the context of the surrounding object.', Ember.typeOf(context) !== 'undefined');

    this.listeners.push({
      url: this.socket.url,
      type: type,
      callback: callback,
      context: context
    });
  },

  /*
  * Removes a callback function from the listeners array. This callback
  * will not longer be invoked when the given `type` event happens.
  */
  off: function off(type, callback) {
    this.listeners = filter.call(this.listeners, function (listeners) {
      return !(listeners.callback === callback && listeners.type === type);
    });
  },

  /*
  * Message is the message which will be passed into the native websockets send method
  * and shouldStringify is a boolean which determines if we should call JSON.stringify on
  * the message.
  */
  send: function send(message) {
    var shouldStringify = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    if (shouldStringify && JSON && JSON.stringify) {
      message = JSON.stringify(message);
    }

    Ember.assert('Cannot send message to the websocket while it is not open.', this.readyState() === WebSocket.OPEN);

    this.socket.send(message);
  },

  close: function close() {
    this.socket.close();
  },

  reconnect: function reconnect() {
    this.set('socket', new WebSocket(this.socket.url, this.get('protocols')));
    this.setupInternalListeners();
  },

  setupInternalListeners: function setupInternalListeners() {
    var _this = this;

    var self = this;

    forEach.call(events, function (eventName) {
      _this.socket['on' + eventName] = function (event) {
        Ember.run(function () {
          var activeListeners = filter.call(self.listeners, function (listener) {
            return listener.url === event.currentTarget.url && listener.type === eventName;
          });

          // TODO: filter active listeners for contexts that are not destroyed

          forEach.call(activeListeners, function (item) {
            item.callback.call(item.context, event);
          });
        });
      };
    });
  },

  /*
  * A helper method to get access to the readyState of the websocket.
  */
  readyState: function readyState() {
    return this.socket.readyState;
  }
});