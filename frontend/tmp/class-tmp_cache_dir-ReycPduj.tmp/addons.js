define('active-model-adapter', ['active-model-adapter/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('active-model-adapter/active-model-adapter', ['exports', 'ember', 'ember-data'], function (exports, Ember, DS) {

  'use strict';

  var InvalidError = DS['default'].InvalidError;
  var errorsHashToArray = DS['default'].errorsHashToArray;
  var RESTAdapter = DS['default'].RESTAdapter;
  var _Ember$String = Ember['default'].String;
  var pluralize = _Ember$String.pluralize;
  var decamelize = _Ember$String.decamelize;
  var underscore = _Ember$String.underscore;

  /**
    @module ember-data
  */

  /**
    The ActiveModelAdapter is a subclass of the RESTAdapter designed to integrate
    with a JSON API that uses an underscored naming convention instead of camelCasing.
    It has been designed to work out of the box with the
    [active\_model\_serializers](http://github.com/rails-api/active_model_serializers)
    Ruby gem. This Adapter expects specific settings using ActiveModel::Serializers,
    `embed :ids, embed_in_root: true` which sideloads the records.

    This adapter extends the DS.RESTAdapter by making consistent use of the camelization,
    decamelization and pluralization methods to normalize the serialized JSON into a
    format that is compatible with a conventional Rails backend and Ember Data.

    ## JSON Structure

    The ActiveModelAdapter expects the JSON returned from your server to follow
    the REST adapter conventions substituting underscored keys for camelcased ones.

    Unlike the DS.RESTAdapter, async relationship keys must be the singular form
    of the relationship name, followed by "_id" for DS.belongsTo relationships,
    or "_ids" for DS.hasMany relationships.

    ### Conventional Names

    Attribute names in your JSON payload should be the underscored versions of
    the attributes in your Ember.js models.

    For example, if you have a `Person` model:

    ```js
    App.FamousPerson = DS.Model.extend({
      firstName: DS.attr('string'),
      lastName: DS.attr('string'),
      occupation: DS.attr('string')
    });
    ```

    The JSON returned should look like this:

    ```js
    {
      "famous_person": {
        "id": 1,
        "first_name": "Barack",
        "last_name": "Obama",
        "occupation": "President"
      }
    }
    ```

    Let's imagine that `Occupation` is just another model:

    ```js
    App.Person = DS.Model.extend({
      firstName: DS.attr('string'),
      lastName: DS.attr('string'),
      occupation: DS.belongsTo('occupation')
    });

    App.Occupation = DS.Model.extend({
      name: DS.attr('string'),
      salary: DS.attr('number'),
      people: DS.hasMany('person')
    });
    ```

    The JSON needed to avoid extra server calls, should look like this:

    ```js
    {
      "people": [{
        "id": 1,
        "first_name": "Barack",
        "last_name": "Obama",
        "occupation_id": 1
      }],

      "occupations": [{
        "id": 1,
        "name": "President",
        "salary": 100000,
        "person_ids": [1]
      }]
    }
    ```

    @class ActiveModelAdapter
    @constructor
    @namespace DS
    @extends DS.RESTAdapter
  **/

  var ActiveModelAdapter = RESTAdapter.extend({
    defaultSerializer: '-active-model',
    /**
      The ActiveModelAdapter overrides the `pathForType` method to build
      underscored URLs by decamelizing and pluralizing the object type name.
       ```js
        this.pathForType("famousPerson");
        //=> "famous_people"
      ```
       @method pathForType
      @param {String} modelName
      @return String
    */
    pathForType: function pathForType(modelName) {
      var decamelized = decamelize(modelName);
      var underscored = underscore(decamelized);
      return pluralize(underscored);
    },

    /**
      The ActiveModelAdapter overrides the `handleResponse` method
      to format errors passed to a DS.InvalidError for all
      422 Unprocessable Entity responses.
       A 422 HTTP response from the server generally implies that the request
      was well formed but the API was unable to process it because the
      content was not semantically correct or meaningful per the API.
       For more information on 422 HTTP Error code see 11.2 WebDAV RFC 4918
      https://tools.ietf.org/html/rfc4918#section-11.2
       @method ajaxError
      @param {Object} jqXHR
      @return error
    */
    handleResponse: function handleResponse(status, headers, payload) {
      if (this.isInvalid(status, headers, payload)) {
        var errors = errorsHashToArray(payload.errors);

        return new InvalidError(errors);
      } else {
        return this._super.apply(this, arguments);
      }
    }
  });

  exports['default'] = ActiveModelAdapter;

});
define('active-model-adapter/active-model-serializer', ['exports', 'ember-data', 'ember'], function (exports, DS, Ember) {

  'use strict';

  var _Ember$String = Ember['default'].String;
  var singularize = _Ember$String.singularize;
  var classify = _Ember$String.classify;
  var decamelize = _Ember$String.decamelize;
  var camelize = _Ember$String.camelize;
  var underscore = _Ember$String.underscore;
  var RESTSerializer = DS['default'].RESTSerializer;
  var normalizeModelName = DS['default'].normalizeModelName;

  /**
    The ActiveModelSerializer is a subclass of the RESTSerializer designed to integrate
    with a JSON API that uses an underscored naming convention instead of camelCasing.
    It has been designed to work out of the box with the
    [active\_model\_serializers](http://github.com/rails-api/active_model_serializers)
    Ruby gem. This Serializer expects specific settings using ActiveModel::Serializers,
    `embed :ids, embed_in_root: true` which sideloads the records.

    This serializer extends the DS.RESTSerializer by making consistent
    use of the camelization, decamelization and pluralization methods to
    normalize the serialized JSON into a format that is compatible with
    a conventional Rails backend and Ember Data.

    ## JSON Structure

    The ActiveModelSerializer expects the JSON returned from your server
    to follow the REST adapter conventions substituting underscored keys
    for camelcased ones.

    ### Conventional Names

    Attribute names in your JSON payload should be the underscored versions of
    the attributes in your Ember.js models.

    For example, if you have a `Person` model:

    ```js
    App.FamousPerson = DS.Model.extend({
      firstName: DS.attr('string'),
      lastName: DS.attr('string'),
      occupation: DS.attr('string')
    });
    ```

    The JSON returned should look like this:

    ```js
    {
      "famous_person": {
        "id": 1,
        "first_name": "Barack",
        "last_name": "Obama",
        "occupation": "President"
      }
    }
    ```

    Let's imagine that `Occupation` is just another model:

    ```js
    App.Person = DS.Model.extend({
      firstName: DS.attr('string'),
      lastName: DS.attr('string'),
      occupation: DS.belongsTo('occupation')
    });

    App.Occupation = DS.Model.extend({
      name: DS.attr('string'),
      salary: DS.attr('number'),
      people: DS.hasMany('person')
    });
    ```

    The JSON needed to avoid extra server calls, should look like this:

    ```js
    {
      "people": [{
        "id": 1,
        "first_name": "Barack",
        "last_name": "Obama",
        "occupation_id": 1
      }],

      "occupations": [{
        "id": 1,
        "name": "President",
        "salary": 100000,
        "person_ids": [1]
      }]
    }
    ```

    @class ActiveModelSerializer
    @namespace DS
    @extends DS.RESTSerializer
  */
  var ActiveModelSerializer = RESTSerializer.extend({
    // SERIALIZE

    /**
      Converts camelCased attributes to underscored when serializing.
       @method keyForAttribute
      @param {String} attribute
      @return String
    */
    keyForAttribute: function keyForAttribute(attr) {
      return decamelize(attr);
    },

    /**
      Underscores relationship names and appends "_id" or "_ids" when serializing
      relationship keys.
       @method keyForRelationship
      @param {String} relationshipModelName
      @param {String} kind
      @return String
    */
    keyForRelationship: function keyForRelationship(relationshipModelName, kind) {
      var key = decamelize(relationshipModelName);
      if (kind === "belongsTo") {
        return key + "_id";
      } else if (kind === "hasMany") {
        return singularize(key) + "_ids";
      } else {
        return key;
      }
    },

    /**
     `keyForLink` can be used to define a custom key when deserializing link
     properties. The `ActiveModelSerializer` camelizes link keys by default.
      @method keyForLink
     @param {String} key
     @param {String} kind `belongsTo` or `hasMany`
     @return {String} normalized key
    */
    keyForLink: function keyForLink(key, relationshipKind) {
      return camelize(key);
    },

    /*
      Does not serialize hasMany relationships by default.
    */
    serializeHasMany: function serializeHasMany() {},

    /**
     Underscores the JSON root keys when serializing.
       @method payloadKeyFromModelName
      @param {String} modelName
      @return {String}
    */
    payloadKeyFromModelName: function payloadKeyFromModelName(modelName) {
      return underscore(decamelize(modelName));
    },

    /**
      Serializes a polymorphic type as a fully capitalized model name.
       @method serializePolymorphicType
      @param {DS.Snapshot} snapshot
      @param {Object} json
      @param {Object} relationship
    */
    serializePolymorphicType: function serializePolymorphicType(snapshot, json, relationship) {
      var key = relationship.key;
      var belongsTo = snapshot.belongsTo(key);
      var jsonKey = underscore(key + "_type");

      if (Ember['default'].isNone(belongsTo)) {
        json[jsonKey] = null;
      } else {
        json[jsonKey] = classify(belongsTo.modelName).replace('/', '::');
      }
    },

    /**
      Add extra step to `DS.RESTSerializer.normalize` so links are normalized.
       If your payload looks like:
       ```js
      {
        "post": {
          "id": 1,
          "title": "Rails is omakase",
          "links": { "flagged_comments": "api/comments/flagged" }
        }
      }
      ```
       The normalized version would look like this
       ```js
      {
        "post": {
          "id": 1,
          "title": "Rails is omakase",
          "links": { "flaggedComments": "api/comments/flagged" }
        }
      }
      ```
       @method normalize
      @param {subclass of DS.Model} typeClass
      @param {Object} hash
      @param {String} prop
      @return Object
    */
    normalize: function normalize(typeClass, hash, prop) {
      this.normalizeLinks(hash);
      return this._super(typeClass, hash, prop);
    },

    /**
      Convert `snake_cased` links  to `camelCase`
       @method normalizeLinks
      @param {Object} data
    */

    normalizeLinks: function normalizeLinks(data) {
      if (data.links) {
        var links = data.links;

        for (var link in links) {
          var camelizedLink = camelize(link);

          if (camelizedLink !== link) {
            links[camelizedLink] = links[link];
            delete links[link];
          }
        }
      }
    },

    extractRelationships: function extractRelationships(modelClass, resourceHash) {
      modelClass.eachRelationship(function (key, relationshipMeta) {
        var relationshipKey = this.keyForRelationship(key, relationshipMeta.kind, "deserialize");

        // prefer the format the AMS gem expects, e.g.:
        // relationship: {id: id, type: type}
        if (relationshipMeta.options.polymorphic) {
          extractPolymorphicRelationships(key, relationshipMeta, resourceHash, relationshipKey);
        }
        // If the preferred format is not found, use {relationship_name_id, relationship_name_type}
        if (resourceHash.hasOwnProperty(relationshipKey) && typeof resourceHash[relationshipKey] !== 'object') {
          var polymorphicTypeKey = this.keyForRelationship(key) + '_type';
          if (resourceHash[polymorphicTypeKey] && relationshipMeta.options.polymorphic) {
            var id = resourceHash[relationshipKey];
            var type = resourceHash[polymorphicTypeKey];
            delete resourceHash[polymorphicTypeKey];
            delete resourceHash[relationshipKey];
            resourceHash[relationshipKey] = { id: id, type: type };
          }
        }
      }, this);
      return this._super.apply(this, arguments);
    },

    modelNameFromPayloadKey: function modelNameFromPayloadKey(key) {
      var convertedFromRubyModule = singularize(key.replace('::', '/'));
      return normalizeModelName(convertedFromRubyModule);
    }
  });

  function extractPolymorphicRelationships(key, relationshipMeta, resourceHash, relationshipKey) {
    var polymorphicKey = decamelize(key);
    var hash = resourceHash[polymorphicKey];
    if (hash !== null && typeof hash === 'object') {
      if (relationshipMeta.kind === 'belongsTo') {
        resourceHash[relationshipKey] = extractIDAndType(hash);
        // otherwise hasMany
      } else if (hash.length) {
          var hashes = hash;
          resourceHash[relationshipKey] = hashes.map(extractIDAndType);
        }
    }
  }

  function extractIDAndType(hash) {
    var id = hash.id;
    var type = hash.type;

    return { id: id, type: type };
  }

  exports['default'] = ActiveModelSerializer;

});
define('active-model-adapter/index', ['exports', 'active-model-adapter/active-model-adapter', 'active-model-adapter/active-model-serializer'], function (exports, ActiveModelAdapter, ActiveModelSerializer) {

	'use strict';

	exports['default'] = ActiveModelAdapter['default'];

	exports.ActiveModelAdapter = ActiveModelAdapter['default'];
	exports.ActiveModelSerializer = ActiveModelSerializer['default'];

});
define('ember-cli-app-version', ['ember-cli-app-version/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('ember-cli-content-security-policy', ['ember-cli-content-security-policy/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('ember-cli-slide-animation', ['ember-cli-slide-animation/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('ember-cli-slide-animation/mixins/slide-view', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  function getCount(path) {
    return path.split('/').filter(function(s) { return s.length; }).length;
  }

  function getApp() {
    return this.container.lookup('application:main');
  }

  function setAnimateOutContext(animateOutContext) {
    getApp.call(this).set('animateOutContext', animateOutContext);
  }
  function getAnimateOutContext() {
    return getApp.call(this).get('animateOutContext');
  }

  function updatePreviousPath() {
    getApp.call(this).set('previousPath', window.location.pathname);
  }
  function getPreviousPath() {
    return getApp.call(this).get('previousPath');
  }

  var isReversed;
  function updateIsReversed() {
    var previousPath = getPreviousPath.call(this);
    var currentPath = window.location.pathname;
    isReversed = previousPath && getCount(previousPath) > getCount(currentPath);
  }

  exports['default'] = Ember['default'].Mixin.create({
    willAnimateOut: function() {
    },
    animateOut: function(done) {
      if (!this.get('animate')) {
        done();
        return;
      }

      setAnimateOutContext.call(this, {
        view: this,
        done: done
      });
    },
    willAnimateIn: function() {
      var animateOutContext = getAnimateOutContext.call(this);
      if (!animateOutContext) return;
      updateIsReversed.call(this);

      var el = this.$();
      var translate = Ember['default'].$(window).width() - el.offset().left;
      el.css('transform', 'translateX(' + (translate * (isReversed ? -1 : 1)) + 'px)');

      el = animateOutContext.view.$();
      var container = el.closest('.container');
      el.one('transitionend', function() {
        container.removeAttr('style');
        el.removeClass('slideOut');
        el.removeAttr('style');
        animateOutContext.done();
      });
      container.css('position', 'relative');
      el.addClass('slideOut');
      translate = el.offset().left + el.outerWidth();
      el.css('transform', 'translateX(' + (translate * (isReversed ? 1 : -1)) + 'px)');
    },
    animateIn: function(done) {
      // on page refresh, don't animate
      if (!getAnimateOutContext.call(this)) {
        done();
        return;
      }

      var el = this.$();
      el.removeAttr('style');
      el.one('transitionend', function() {
        el.removeClass('slideIn');
        done();
      });
      el.addClass('slideIn');
    },
    didAnimateOut: function() {
      setAnimateOutContext.call(this, undefined);
    },
    didAnimateIn: function() {
      updatePreviousPath.call(this);
    },

    isAnimated: true,
    actions: {
      newView: function(newView) {
        this.set('animate', newView.isAnimated);
      }
    }
  });

});
define('ember-websockets', ['ember-websockets/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('ember-websockets/helpers/socketio-proxy', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].ObjectProxy.extend({
    /*
    * This method simply passes the arguments to the socketio on method except it binds the callback function to
    * the run loop.
    */
    on: function on(type, callbackFn, context) {
      this.socket.on(type, Ember['default'].run.bind(context, callbackFn));
    },

    /*
    * This method passes the argument to the socketio emit method. If an acknowledgement function is passed then
    * we bind that in a run loop.
    */
    emit: function emit(channel, data, acknowledgementFn, context) {
      if (acknowledgementFn && context) {
        this.socket.emit.call(this.socket, channel, data, Ember['default'].run.bind(context, acknowledgementFn));
      } else {
        this.socket.emit.apply(this.socket, arguments);
      }
    },

    send: function send() {
      this.socket.send.apply(this.socket, arguments);
    },

    close: function close() {
      this.socket.close.apply(this.socket, arguments);
    },

    connect: function connect() {
      this.socket.connect.apply(this.socket, arguments);
    }
  });

});
define('ember-websockets/helpers/websocket-proxy', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var events = ['close', 'error', 'message', 'open'];
  var filter = Array.prototype.filter;
  var indexOf = Array.prototype.indexOf;
  var forEach = Array.prototype.forEach;

  exports['default'] = Ember['default'].ObjectProxy.extend({
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
      this.listeners = Ember['default'].makeArray();
      this.setupInternalListeners();
    },

    /*
    * Adds a callback function into the listeners array which will
    * be invoked later whenever a given `type` event happens.
    *
    * type: must be either 'open', 'message', 'close', 'error'
    */
    on: function on(type, callback, context) {
      Ember['default'].assert(type + ' is not a recognized event name. Please use on of the following: ' + events.join(', '), indexOf.call(events, type) !== -1);
      Ember['default'].assert('The second argument must be a function.', Ember['default'].typeOf(callback) === 'function');
      Ember['default'].assert('The third argument must be the context of the surrounding object.', Ember['default'].typeOf(context) !== 'undefined');

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

      Ember['default'].assert('Cannot send message to the websocket while it is not open.', this.readyState() === WebSocket.OPEN);

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
          Ember['default'].run(function () {
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

});//# sourceMappingURL=addons.map