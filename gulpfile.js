var gulp = require('gulp');


//KOA app
var nodemon = require('gulp-nodemon');
gulp.task('nodemon', function() {
  return nodemon({
    script: 'koa/server.js',
    env: { NODE_ENV: 'development' },
    ignore: 'angular/*',
    execMap: {
      js: 'babel-node'
    }
  });
});


//Angular app
var surgeon = require('gulp-surgeon');
var watch = require('gulp-watch');

gulp.task('scripts', function() {
  return gulp.src('angular/**/*.js')
    .pipe(gulp.dest('koa/dist/'));
});

gulp.task('watch', function() {
  watch(
    "angular/**/*.js"
  , function (files) {
      gulp.start("scripts");
    }
  );
});

gulp.task('build', ['scripts']);

gulp.task('default', ['build', 'nodemon', 'watch']);
