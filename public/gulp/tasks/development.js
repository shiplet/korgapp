'use strict';

var gulp 					= require('gulp');
var runSequence		= require('run-sequence');
var gutil					= require('gulp-util');

gulp.task('dev', ['clean'], function(cb){

	cb = cb || function(){};

	global.isProd = false;

runSequence([
		'styles', 
		'images', 
		'fonts',
		'views', 
		'browserify', 
		'htaccess'], 'watch', cb);

});