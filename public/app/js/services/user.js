'use strict';

const User = function($rootScope, $http, $q, $timeout) {
	
	this.User = false;

	this.getUser = function() {
		return this.User;
	};

	this.setUser = function(user) {
		this.User = user;
	};

};

export default {
	name: 'User',
	fn: User
};