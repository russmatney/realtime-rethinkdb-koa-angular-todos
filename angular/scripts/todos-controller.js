
app.controller('TodosController',
          ['$scope', 'ApiService',
  function( $scope ,  ApiService ) {
    console.log('ToDos controller');

    this.todos = [];
    var self = this;
    ApiService.list()
      .then(function(todos) {
        angular.extend(self.todos, todos);
      })
  }]
)
