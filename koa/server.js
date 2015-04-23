var koa = require('koa');
var web = require('koa-static');
var route = require('koa-route');

import TodoController from "./todo-controller";
import r from "./rethinkdb";

var app = koa();

app.use(web(__dirname + '/dist'))

app.use(function*(next) {
  var tables = yield r.db('test').tableList().run()
  if (tables.includes('todos')) { //create table if it doesn't exist
    yield next;
  } else {
    yield r.db('test').tableCreate('todos').run();
    yield next;
  }
})

var todoController = new TodoController();

app.use(route.get('/api/todos', todoController.list));

app.listen(3000);
console.log('app listening on 3000');

