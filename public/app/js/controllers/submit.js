'use strict';

function SubmitCtrl($rootScope, $scope, $window, FormModules) {

	function init() {		
		$scope.EditSelect_1 = FormModules.EditSelect_1;
		$scope.EditSelect_2 = FormModules.EditSelect_2;

		if($window.sessionStorage.waveform) {
			$scope.waveform = JSON.parse($window.sessionStorage.waveform);
			$scope.edit = JSON.parse($window.sessionStorage.edit);
		}

	}


	$scope.submitWaveform = function() {
		console.log($scope.waveform);
	};


	$scope.resetWaveform = function()	{
		$scope.waveform = {};
	};


	$scope.trackInput = function() {
		$window.sessionStorage.waveform = JSON.stringify($scope.waveform);
		$window.sessionStorage.edit = JSON.stringify($scope.edit);
	};


	$scope.$on('$stateChangeSuccess', init);

}

export default {
	name: 'SubmitCtrl',
	fn: SubmitCtrl
};