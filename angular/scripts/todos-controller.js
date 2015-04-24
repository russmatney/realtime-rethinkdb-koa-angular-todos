app.service('TodosStore',
          ['ApiService',
  function( ApiService ) {
    console.log('todos store');

    this.todos = [];

    var self = this;
    ApiService.list()
      .then(function(todos) {
        angular.extend(self.todos, todos);
      })

  }]
)

app.controller('TodosController',
          ['$scope', 'ApiService', 'TodosStore',
  function( $scope ,  ApiService ,  TodosStore ) {
    console.log('ToDos controller');

    this.todos = TodosStore.todos;

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
