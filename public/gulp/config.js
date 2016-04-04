'use strict';

module.exports = {

  'browserPort'  : 3000, /* set to 9294 if you don't wan't to reconfigure apache */
  'UIPort'       : 3001, /* set to 9295 if you don't wan't to reconfigure apache */
  'serverPort'   : 3002, /* set to 9296 if you don't wan't to reconfigure apache */

  'styles': {
    'src' : 'app/styles/**/*.scss',
    'dest': 'build/css',
    'prodSourcemap': false,
    'sassIncludePaths': []
  },

  'scripts': {
    'src' : 'app/js/**/*.js',
    'dest': 'build/js',
    'exclude' : ['!app/js/plugins/**', '!app/js/lib/**']
  },

  'images': {
    'src' : 'app/images/**/*',
    'dest': 'build/images'
  },

  'fonts': {
    'src' : ['app/fonts/**/*'],
    'dest': 'build/fonts'
  },

  'htaccess': {
    'src' : 'app/htaccess/.htaccess',
    'dest': 'build/'
  },

  'views': {
    'watch': [
      'app/index.html',
      'app/views/**/*.html'
    ],
    'src': 'app/views/**/*.html',
    'dest': 'app/js'
  },

  'gzip': {
    'src': 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    'dest': 'build/',
    'options': {}
  },

  'dist': {
    'root'  : 'build/'
  },

  'browserify': {
    'entries'   : ['./app/js/main.js'],
    'bundleName': 'main.js',
    'prodSourcemap' : false
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};
