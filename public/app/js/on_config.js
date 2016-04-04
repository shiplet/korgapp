'use strict';

function OnConfig($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider
		.state('root', {
			url: '/',
			controller: 'WaveformCtrl',
			templateUrl: 'main.html'
		})
		.state('admin', {
			url: '/admin',
			controller: 'AdminCtrl',
			templateUrl: 'admin.html'
		})
		;


	$urlRouterProvider.otherwise('root');

}

export default OnConfig;