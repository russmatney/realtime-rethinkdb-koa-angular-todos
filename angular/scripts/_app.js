import angular from 'angular';

console.log(angular);

var app = angular.module('app', []);

var socket = io();
socket.on('ping', function(data) {
  console.log(data)

  socket.emit('hello', 'goodbye');
});



