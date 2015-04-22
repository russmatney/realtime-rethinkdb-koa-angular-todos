var koa = require('koa');
var web = require('koa-static');

var app = koa();

app.use(web(__dirname + '/dist'))

app.listen(3000);
console.log('app listening on 3000');
