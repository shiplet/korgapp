'use strict';

var config				= require('../config');
var gulp 					= require('gulp');

gulp.task('htaccess', function(){

	return gulp.src(config.htaccess.src)
		.pipe(gulp.dest(config.htaccess.dest));

});