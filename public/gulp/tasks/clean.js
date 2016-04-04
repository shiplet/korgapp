'use strict';

var config				= require('../config');
var gulp 					= require('gulp');
var del						= require('del');
var gutil					= require('gulp-util');

gulp.task('clean', function(cb){

	del([config.dist.root], cb);

});