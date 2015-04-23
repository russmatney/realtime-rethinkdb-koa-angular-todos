
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

    this.submit = function(newTodo) {
      ApiService.create(newTodo)
        .then(function() {
          console.log('success');
          newTodo.label = "";
        }, function() {
          console.log('error');
          newTodo.label = "err what";
        })
    }

    this.delete = function(todo) {
      ApiService.delete(todo)
        .then(function() {
          console.log('success');
        }, function() {
          console.log('error');
        })

    }
  }]
)
