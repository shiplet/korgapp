'use strict';

function LoginCtrl($rootScope, $state, $scope, $http, $q, User, Util) {

	$scope.alert = "";

	$scope.resetAlert = function() {
		$scope.alert = "";
	};

	$scope.submitLogin = function()	{
		if(!$scope.user.username || !$scope.user.password) {
			$scope.alert = "Please enter either a valid username or password";
		} else {
			User.login($scope.user);
		}
	};

}

export default {
	name: 'LoginCtrl',
	fn: LoginCtrl
};