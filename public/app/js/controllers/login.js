'use strict';

function LoginCtrl($rootScope, $state, $scope, $http, $q, User, Util) {

	$scope.alert = "";

	$scope.submitLogin = function()	{
		if(!$scope.user.username || !$scope.user.password) {
			$scope.alert = "Please enter either a valid username or password";
		} else {

			var urlParams = {
				username: $scope.user.username,
				password: $scope.user.password
			};

			$http.post('http://localhost:8080/login', urlParams).then(function(res){
				if(res.data.status === '200') {
					$scope.alert = "";
					User.setUser(res.data);
					$state.go('adminSubmit');
				} else {
					$scope.alert = "Either your username or password are incorrect. Please try again.";
				}
			});

		}
	};

}

export default {
	name: 'LoginCtrl',
	fn: LoginCtrl
};