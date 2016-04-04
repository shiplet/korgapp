'use strict';


function OnRun($rootScope, $state) {

	$rootScope.toggleNav = false;

	$rootScope.$on('$stateChangeSuccess', handleStateChangeSuccess);

	function handleStateChangeSuccess(event, toState, toParams, fromState, fromParams, options) {
		if(toState.name === 'admin') {
			$rootScope.toggleNav = true;
		} else {
			$rootScope.toggleNav = false;
		}
	}

}


export default OnRun;