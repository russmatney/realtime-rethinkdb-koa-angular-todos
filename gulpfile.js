var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
  nodemon({
    script: 'app/server.js',
    env: { NODE_ENV: 'development' },
    execMap: {
      js: 'babel-node'
    }
  });
});

gulp.task('default', ['nodemon']);
