'use strict';

function GlobalCtrl($rootScope, $scope, $state, User) {

	function init() {
		User.getUser();
	}

	$scope.logOut = function() {
		User.logout();
	};

	$rootScope.$on('$stateChangeSuccess', init);

}

export default {
	name: 'GlobalCtrl',
	fn: GlobalCtrl
};