(function() {
  'use strict';
  /*eslint-disable*/
  var gulp = require('gulp');
  var order = require('gulp-order');
  var concat = require('gulp-concat');
  var plumber = require('gulp-plumber');
  var sourcemaps = require('gulp-sourcemaps');
  var babel = require('gulp-babel');
  var connect = require('gulp-connect');
  /*eslint-enable*/

  gulp.task('bundle', bundle);
  gulp.task('start-web-server', startWebServer);
  gulp.task('watch', watch);
  gulp.task('default', ['bundle', 'start-web-server', 'watch']);

  //////////////////////////////////////////////

  var jsFiles = [
    'app/**/*.js',
    '!app/bower_components/**/*',
    '!app/content/bundle.js',
  ];

  function bundle (){
    return gulp.src(jsFiles)
     .pipe(order([
       'app/app.module.js',           // put the main module first
       'app/**/*.module.js',          // followed by other modules
       'app/**/*.js',                 // and all other JS files
     ], { base: './' }))
     .pipe(plumber())                 // restart  gulp on error
     .pipe(sourcemaps.init())         // let sourcemaps watch this pipeline
     .pipe(babel())                   // transpile into ES5 for browsers
     .pipe(concat('bundle.js'))       // concatenate all JS files
     .pipe(sourcemaps.write('.'))     // emit the .map file for debugging
     .pipe(gulp.dest('app/content'));
  }

  function startWebServer (){
    connect.server({
      root: 'app',
      port: '8000',
    });
  }


  function watch (){
    gulp.watch('app/**/*', ['bundle']);
  }
})();
