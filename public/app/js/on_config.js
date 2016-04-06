'use strict';

function OnConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

	$locationProvider.html5Mode(true);
	$httpProvider.defaults.headers.post = {'Content-Type': 'application/x-www-form-url-encoded'};

	$stateProvider
		.state('root', {
			url: '/',
			controller: 'WaveformCtrl',
			templateUrl: 'main.html'
		})
		.state('admin', {
			url: '/admin',
			controller: 'AdminCtrl',
		})
		.state('adminLogin', {
			url: '/login',
			controller: 'LoginCtrl',
			templateUrl: 'adminLogin.html'
		})
		.state('adminSubmit', {
			url: '/submit',
			controller: 'SubmitCtrl',
			templateUrl: 'adminSubmit.html'
		})
		;


	$urlRouterProvider.otherwise('root');

}

export default OnConfig;