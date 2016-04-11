'use strict';

const User = function($rootScope, $http, $q, $state, $timeout, $window) {
	
	this.User = false;

	this.getUser = function() {
		if($window.sessionStorage.user) {
			$rootScope.signOut = true;
			return $window.sessionStorage.user;
		} else {
			$rootScope.signOut = this.User;
			return this.User;			
		}
	};

	this.setUser = function(user) {
		if(!user) {
			delete $window.sessionStorage.user;
			this.User = user;
		} else {
			$window.sessionStorage.user = JSON.stringify(user);
			this.User = user;			
		}
	};

	this.login = function(user) {
		var self = this;
		var urlParams = {
			username: user.username,
			password: user.password
		};

		$http.post('http://localhost:8080/login', urlParams).then(function(res){
			if(res.data.status === '200') {
				$rootScope.alert = "";
				self.setUser(res.data);
				$state.go('adminSubmit');
			} else {
				$rootScope.alert = "Either your username or password are incorrect. Please try again.";
			}
		});
	};

	this.logout = function() {
		this.setUser(false);
		$rootScope.signOut = false;
		delete $window.sessionStorage.waveform;
		$state.go('root');
	};

};

export default {
	name: 'User',
	fn: User
};