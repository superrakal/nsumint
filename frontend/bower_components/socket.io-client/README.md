
# socket.io-client

[![Build Status](https://secure.travis-ci.org/Automattic/socket.io-client.png)](http://travis-ci.org/Automattic/socket.io-client)
[![NPM version](https://badge.fury.io/js/socket.io-client.png)](http://badge.fury.io/js/socket.io-client)

## How to use

A standalone build of `socket.io-client` is exposed automatically by the
socket.io server as `/socket.io/socket.io.js`. Alternatively you can
serve the file `socket.io.js` found at the root of this repository.

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io('http://nsumint.ru');
  socket.on('connect', function(){
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
  });
</script>
```

Socket.IO is compatible with [browserify](http://browserify.org/).

### Node.JS (server-side usage)

  Add `socket.io-client` to your `package.json` and then:

  ```js
  var socket = require('socket.io-client')('http://nsumint.ru');
  socket.on('connect', function(){
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
  });
  ```

## API

### IO(url:String, opts:Object):Socket

  Exposed as the `io` namespace in the standalone build, or the result
  of calling `require('socket.io-client')`.

  When called, it creates a new `Manager` for the given URL, and attempts
  to reuse an existing `Manager` for subsequent calls, unless the
  `multiplex` option is passed with `false`.

  The rest of the options are passed to the `Manager` constructor (see below
  for details).

  A `Socket` instance is returned for the namespace specified by the
  pathname in the URL, defaulting to `/`. For example, if the `url` is
  `http://nsumint.ru/users`, a transport connection will be established to
  `http://nsumint.ru` and a Socket.IO connection will be established to
  `/users`.

### IO#protocol

  Socket.io protocol revision number this client works with.

### IO#Socket

  Reference to the `Socket` constructor.

### IO#Manager

  Reference to the `Manager` constructor.

### IO#Emitter

  Reference to the `Emitter` constructor.

### Manager(url:String, opts:Object)

  A `Manager` represents a connection to a given Socket.IO server. One or
  more `Socket` instances are associated with the manager. The manager
  can be accessed through the `io` property of each `Socket` instance.

  The `opts` are also passed to `engine.io` upon initialization of the
  underlying `Socket`.

  Options:
  - `reconnection` whether to reconnect automatically (`true`)
  - `reconnectionDelay` how long to wait before attempting a new
    reconnection (`1000`)
  - `reconnectionDelayMax` maximum amount of time to wait between
    reconnections (`5000`). Each attempt increases the reconnection by
    the amount specified by `reconnectionDelay`.
  - `timeout` connection timeout before a `connect_error`
    and `connect_timeout` events are emitted (`20000`)

#### Events

  - `connect`. Fired upon a successful connection.
  - `connect_error`. Fired upon a connection error.
    Parameters:
      - `Object` error object
  - `connect_timeout`. Fired upon a connection timeout.
  - `reconnect`. Fired upon a successful reconnection.
    Parameters:
      - `Number` reconnection attempt number
  - `reconnect_attempt`. Fired upon an attempt to reconnect.
  - `reconnecting`. Fired upon an attempt to reconnect.
    Parameters:
      - `Number` reconnection attempt number
  - `reconnect_error`. Fired upon a reconnection attempt error.
    Parameters:
      - `Object` error object
  - `reconnect_failed`. Fired when couldn't reconnect within `reconnectionAttempts`

The events above are also emitted on the individual sockets that
reconnect that depend on this `Manager`.

### Manager#reconnection(v:Boolean):Manager

  Sets the `reconnection` option, or returns it if no parameters
  are passed.

### Manager#reconnectionAttempts(v:Boolean):Manager

  Sets the `reconnectionAttempts` option, or returns it if no parameters
  are passed.

### Manager#reconnectionDelay(v:Boolean):Manager

  Sets the `reconectionDelay` option, or returns it if no parameters
  are passed.

### Manager#reconnectionDelayMax(v:Boolean):Manager

  Sets the `reconectionDelayMax` option, or returns it if no parameters
  are passed.

### Manager#timeout(v:Boolean):Manager

  Sets the `timeout` option, or returns it if no parameters
  are passed.

### Socket

#### Events

  - `connect`. Fired upon connecting.
  - `error`. Fired upon a connection error
    Parameters:
      - `Object` error data
  - `disconnect`. Fired upon a disconnection.
  - `reconnect`. Fired upon a successful reconnection.
    Parameters:
      - `Number` reconnection attempt number
  - `reconnect_attempt`. Fired upon an attempt to reconnect.
  - `reconnecting`. Fired upon an attempt to reconnect.
    Parameters:
      - `Number` reconnection attempt number
  - `reconnect_error`. Fired upon a reconnection attempt error.
    Parameters:
      - `Object` error object
  - `reconnect_failed`. Fired when couldn't reconnect within `reconnectionAttempts`

## License

MIT
