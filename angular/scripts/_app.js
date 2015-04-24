import angular from 'angular';

console.log(angular);

var app = angular.module('app', []);

var todoSocket = io.connect("http://localhost:3000/todos");

todoSocket.on('newTodo', function(data) {
  console.log('new Todo from socket')
  console.log(data)
});

todoSocket.on('deletedTodo', function(data) {
  console.log('deleted Todo from socket')
  console.log(data)
});
