import angular from 'angular';

console.log(angular);

var app = angular.module('app', []);

app.run(
          ['TodosStore', '$rootScope',
  function( TodosStore ,  $rootScope ) {

    var socket = io.connect("http://localhost:3000/todos");

    socket.on('newTodo', function(data) {
      console.log('new Todo from socket')
      console.log(data)

      //need $scope.$apply
      $rootScope.$apply(function() {
        TodosStore.todos.push(data);
      });

    });

    socket.on('deletedTodo', function(data) {
      console.log('deleted Todo from socket')
      console.log(data)

      //need $scope.$apply
      //logic isn't exactly right
      $rootScope.$apply(function() {
        TodosStore.todos.splice(TodosStore.todos.indexOf(data), 1);
      });

    });

  }]
);

