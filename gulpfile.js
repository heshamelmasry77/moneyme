'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

var htmlbeautify = require('gulp-html-beautify');

gulp.task('htmlbeautify', function() {
  var options =
  {indentSize: 2};
  gulp.src('./src/*.html')
  .pipe(htmlbeautify(options))
  .pipe(gulp.dest('./public/'))
});
/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
