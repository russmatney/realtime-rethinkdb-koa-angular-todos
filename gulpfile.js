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
  return gulp.src('angular/scripts/**/*.js')
    .pipe(surgeon.stitch("app.js"))
    .pipe(gulp.dest('koa/dist/'));
});

gulp.task('html', function() {
  return gulp.src('angular/index.html')
    .pipe(gulp.dest('koa/dist/'));
});

gulp.task('config', function() {
  return gulp.src('angular/config.js')
    .pipe(gulp.dest('koa/dist/'));
});

gulp.task('watch', function() {
  watch(
    "angular/scripts/**/*.js"
  , function (files) {
      gulp.start("scripts");
    }
  );

  watch(
    "angular/index.html"
  , function (files) {
      gulp.start("html");
    }
  );

  watch(
    "angular/config.js"
  , function (files) {
      gulp.start("config");
    }
  );
});

gulp.task('build', ['scripts', 'html', 'config']);

gulp.task('default', ['build', 'nodemon', 'watch']);
