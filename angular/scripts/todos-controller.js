
app.controller('TodosController',
          ['$scope', 'ApiService',
  function( $scope ,  ApiService ) {
    console.log('ToDos controller');

    ApiService.ping();
  }]
)
