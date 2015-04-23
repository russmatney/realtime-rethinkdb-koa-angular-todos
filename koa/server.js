var koa = require('koa');
var web = require('koa-static');
var route = require('koa-route');

var app = koa();

app.use(web(__dirname + '/dist'))

app.use(route.get('/api/todos', function*(next) {
  this.body = 'derp!';
  this.status = 200;
  yield next;
}));

app.listen(3000);
console.log('app listening on 3000');
