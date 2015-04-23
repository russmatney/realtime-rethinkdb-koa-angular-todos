
app.service('ApiService',
          ['$http', '$q',
  function( $http ,  $q ) {
    console.log('ApiService');

    this.ping = function() {
      var def = $q.defer();
      $http.get('/api/todos')
        .success(function(res) {
          console.log('res');
          console.log(res);
        })
        .error(function(err) {
          console.log('err');
          console.log(err);
        })
      return def.promise;
    }
  }]
)

