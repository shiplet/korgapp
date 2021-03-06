'use strict';

var config				= require('../config');
var changed				= require('gulp-changed');
var gulp 					= require('gulp');
var browserSync		= require('browser-sync');

gulp.task('fonts', function(){

	return gulp.src(config.fonts.src)
		.pipe(changed(config.fonts.dest))
		.pipe(gulp.dest(config.fonts.dest))
		.pipe(browserSync.stream({ once: true }));

})