'use strict';

function OnConfig($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider
		.state('root', {
			url: '/',
			controller: 'WaveformCtrl',
			templateUrl: 'components/waveform_settings.html'
		});


	$urlRouterProvider.otherwise('/');

}

export default OnConfig;