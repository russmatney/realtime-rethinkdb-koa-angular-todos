
app.service('ApiService',
          ['$http', '$q',
  function( $http ,  $q ) {
    console.log('ApiService');

    this.list = function() {
      var def = $q.defer();
      $http.get('/api/todos')
        .success(function(todos) {
          console.log('todos!');
          console.log(todos);
          def.resolve(todos);
        })
        .error(function(err) {
          console.log('err');
          console.log(err);
        })
      return def.promise;
    }
  }]
)

