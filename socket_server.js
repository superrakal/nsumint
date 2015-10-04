var app = require('express')();
var http = require('http').Server(app);
var http_req = require('http');
var io = require('socket.io')(http);
var connectCounter = 0;

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    connectCounter ++;

    socket.emit('client connected', (socket.id).toString());
    io.emit('connectCounter changes', connectCounter);

    socket.on('disconnect', function(){
        connectCounter --;
        var req = http_req.get('http://nsumint.ru/user/kick_user_from_queue?socket_id='+(socket.id).toString());
        req.on('error', function(err) {
            console.log(err);
        });
        req.end();
        io.emit('connectCounter changes', connectCounter);
    });

    socket.on('dialog start', function(socket_id){
        console.log('user found: ' + socket_id);
        io.to(socket_id).emit('user found');
    });

    socket.on('user start typing', function(socket_id){
        io.to(socket_id).emit('user start typing');
    });

    socket.on('user stop typing', function(socket_id){
        io.to(socket_id).emit('user stop typing');
    });

    socket.on('message', function(data){

        if (io.sockets.connected[data.my_socket_id] != undefined)
        {
            io.to(data.my_socket_id).emit('my message', data.message);
        }

        if (io.sockets.connected[data.user_socket_id]!= undefined)
        {
            io.to(data.user_socket_id).emit('user message', data.my_sex, data.my_faculty, data.message);
        }
        else
        {
            io.to(data.my_socket_id).emit('user disconnected');
        }
    });

    socket.on('image', function(data){

        if (io.sockets.connected[data.my_socket_id] != undefined)
        {
            io.to(data.my_socket_id).emit('my image', data.image_url);
        }

        if (io.sockets.connected[data.user_socket_id]!= undefined)
        {
            io.to(data.user_socket_id).emit('user image', data.image_url);
        }
        else
        {
            io.to(data.my_socket_id).emit('user disconnected');
        }
    });

    socket.on('user reconnected', function(data){
        if (io.sockets.connected[data.user_socket]!= undefined)
        {
            io.to(data.user_socket).emit('user reconnected', data.new_socket);
        }
    });

    socket.on('end dialog', function(socket_id){
        if (io.sockets.connected[socket_id]!= undefined)
        {
            io.to(socket_id).emit('dialog ended');
        }
    });
});

http.listen(8080, function(){
    console.log('listening on *:8080');
});