require('es6-promise').polyfill();

var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var babelify    = require("babelify");
var plugins     = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
gulp.task('webserver', function(){
  gulp.src('./')
    .pipe(plugins.webserver({
      fallback   : 'index.html',
      host       : 'localhost',
      livereload : true,
      open       : true
  }))
})

gulp.task('browserify',function(cb) {
  return browserify({
    entries: ['./js/index.js']
  })
  .transform('babelify', {
    presets: ['es2015', 'react']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(plugins.addSrc('index.html'))
  .pipe(gulp.dest('./'))
})

gulp.task('build', function() {
  runSequence(
    ['browserify'],['webserver']
  );
})

gulp.task('watch', function(){
  gulp.watch(['./js/**'], ['browserify'])
})
