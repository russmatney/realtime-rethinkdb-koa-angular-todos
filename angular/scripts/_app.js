import angular from 'angular';

console.log(angular);

var app = angular.module('app', []);

app.run(
          ['TodosStore',
  function( TodosStore ) {

    var socket = io.connect("http://localhost:3000/todos");

    socket.on('newTodo', function(data) {
      console.log('new Todo from socket')
      console.log(data)

      //need $scope.$apply
      TodosStore.todos.push(data);

    });

    socket.on('deletedTodo', function(data) {
      console.log('deleted Todo from socket')
      console.log(data)

      //need $scope.$apply
      //logic isn't exactly right
      TodosStore.todos.splice(TodosStore.todos.indexOf(data), 1);

    });

  }]
);

