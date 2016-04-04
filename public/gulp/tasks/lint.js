'use strict';

var config = require('../config');
var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src([config.scripts.src, '!app/js/plugins/**', '!app/js/lib/**'])
    .pipe(jshint({ validthis: true, browserify: true, browser: true, devel: true, esnext: true, node: true, predef: ["$"] }))
    .pipe(jshint.reporter('jshint-stylish'));
});


/*
	Leave this task uncommented for standard dev & production builds
// */
// gulp.task('copy', function() {
//   return gulp.src(['app/js/plugins/ate.min.js'])
//         .pipe(gulp.dest('build/home/js/'));
// });

// gulp.task('copyStratus', function(){
// 	return gulp.src('app/js/plugins/stratus/**/*.*')
// 		.pipe(gulp.dest('build/home/js/stratus'));
// })

/*
	Uncomment this task if running version checks
*/
// gulp.task('copy', function() {
//   return gulp.src(['app/js/plugins/ate.min.js', 'node_modules/**/package.json'])
//         .pipe(gulp.dest('build/home/js/'));
// });