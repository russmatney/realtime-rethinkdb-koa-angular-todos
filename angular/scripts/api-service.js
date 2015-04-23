
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
          def.reject(err);
        })
      return def.promise;
    }

    this.create = function(todo) {
      var def = $q.defer();
      $http.post('/api/todos', todo)
        .success(function(huzzah) {
          console.log('huzzah!');
          console.log(huzzah);
          def.resolve(huzzah);
        })
        .error(function(err) {
          console.log('err');
          console.log(err);
          def.reject(err);
        })
      return def.promise;
    }

    this.delete = function(todo) {
      var def = $q.defer();
      $http.delete('/api/todos/' + todo.id)
        .success(function(huzzah) {
          console.log('huzzah!');
          console.log(huzzah);
          def.resolve(huzzah);
        })
        .error(function(err) {
          console.log('err');
          console.log(err);
          def.reject(err);
        })
      return def.promise;
    }


  }]
)

