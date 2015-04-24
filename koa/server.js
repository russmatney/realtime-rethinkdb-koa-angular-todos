var koa = require('koa');
var web = require('koa-static');
var route = require('koa-route');
var body = require('koa-bodyparser');

var co = require('co');

var socketio = require('socket.io');
var http = require('http');

var logger = require('koa-logger');

import TodoController from "./todo-controller";
import r from "./rethinkdb";

var app = koa();

app.use(logger());

app.use(web(__dirname + '/dist'))
app.use(body());

app.use(function*(next) {
  var tables = yield r.db('test').tableList().run()
  if (tables.includes('todos')) { //create table if it doesn't exist
    yield next;
  } else {
    yield r.db('test').tableCreate('todos').run();
    yield next;
  }
})

app.use(route.get('/api/todos', TodoController.list));
app.use(route.post('/api/todos', TodoController.create));
app.use(route.delete('/api/todos/:id', TodoController.delete));

var server = http.createServer(app.callback());
var io = socketio(server);


var todoChannel = io.of('/todos');
var todoSocket;

todoChannel.on('connection', function(socket) {
  todoSocket = socket;
  console.log('connection to /todos');
})

co(function*() {
  var feed = yield TodoController.todoFeed();

  console.log('middleware runs');
  feed.each(function(err, res) {
    console.log('feed.each');
    console.log(err);
    console.log(res);

    if (todoSocket.emit) {

      if (res.new_val && !res.old_val) {
        todoSocket.emit('newTodo', res.new_val);
      } else if (!res.new_val && res.old_val) {
        todoSocket.emit('deletedTodo', res.old_val);
      }

    }

  })
})

server.listen(3000);
console.log('app listening on 3000');

