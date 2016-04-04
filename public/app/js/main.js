'use strict';

import angular from 'angular';

import jQuery from 'jquery';
global.jQuery = jQuery;
global.$ = jQuery;

// angular modules
import 'angular-ui-router';
import 'ng-elif';
// import 'angulartics';
// import 'angulartics-google-analytics';

import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// third party modules

import 'ng-infinite-scroll';

const requires = [
	'ui.router',
	'templates',
	// 'app.filters',
	'app.controllers',
	// 'app.services',
	// 'app.directives',
	// 'infinite-scroll',
	'elif',
	// 'angulartics',
	// 'angulartics.google.analytics',
	// 'angulartics.debug'
];

// create and bootstrap application
angular.element(document).ready(function()
{
	// mount on window for testing
	// window.app = angular.module('app', requires);
	var app = angular.module('app', requires);

	angular.module('app').constant('AppSettings', require('./constants'));

	angular.module('app').config(require('./on_config'));

	angular.module('app').run(require('./on_run'));

	angular.bootstrap(document, ['app']);

});