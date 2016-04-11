'use strict';

function SubmitCtrl($rootScope, $scope, $window, FormModules) {

	function init() {		
		$scope.EditSelect_1 = FormModules.EditSelect_1;
		$scope.EditSelect_2 = FormModules.EditSelect_2;

		if($window.sessionStorage.waveform) {
			$scope.waveform = JSON.parse($window.sessionStorage.waveform);
		}

	}

	$scope.testWaveform = function() {
		console.log($scope.waveform);
	};


	$scope.trackInput = function() {
		$window.sessionStorage.waveform = JSON.stringify($scope.waveform);
	};


	$scope.$on('$stateChangeSuccess', init);

}

export default {
	name: 'SubmitCtrl',
	fn: SubmitCtrl
};