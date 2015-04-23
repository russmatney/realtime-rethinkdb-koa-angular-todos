var koa = require('koa');
var web = require('koa-static');
var route = require('koa-route');

import TodoController from "./todo-controller";

var app = koa();

app.use(web(__dirname + '/dist'))

var todoController = new TodoController();

app.use(route.get('/api/todos', todoController.list));

app.listen(3000);
console.log('app listening on 3000');
