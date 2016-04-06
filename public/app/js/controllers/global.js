'use strict';

function GlobalCtrl($scope, $rootScope, $state, User) {

	$scope.logOut = function() {
		User.setUser({});
		$rootScope.signOut = false;
		$state.go('root');
	};

}

export default {
	name: 'GlobalCtrl',
	fn: GlobalCtrl
};