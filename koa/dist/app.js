import angular from 'angular';

console.log(angular);

var app = angular.module('app', []);

app.controller('TodosController',
          ['$scope',
  function( $scope ) {
    console.log('ToDos controller');
    console.log('ToDos controller');
    console.log('ToDos controller');
  }]
)

