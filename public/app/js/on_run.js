'use strict';


function OnRun($rootScope, $state, User) {

	$rootScope.toggleNav = false;
	$rootScope.$on('$stateChangeSuccess', handleStateChange);

	function handleStateChange(event, toState, toParams, fromState, fromParams) {

		if($state.$current.name.indexOf('admin') > -1) $rootScope.toggleNav = true;
		else $rootScope.toggleNav = false;

		if(toState.name.indexOf('admin') > -1){
			if(!User.getUser()) {
				$state.go('adminLogin');
			} else {
				$state.go('adminSubmit');
			}			
		}
	}

}


export default OnRun;