'use strict';

const Util = function($rootScope) {

	this.encodeUrlParams = function(params) {
		var encodedParams = '',
				firstItem = true;

		for (var key in params) {
			if(firstItem) {
				encodedParams += key + '=' + params[key];
				firstItem = false;
			} else {
				encodedParams += '&' + key + '=' + params[key];
			}
		}

		console.log(encodedParams);
	};

};

export default {
	name: 'Util',
	fn: Util
};