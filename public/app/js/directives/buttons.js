'use strict';

const buttons = function($rootScope, $window, $timeout) {
	
	function link($scope, $element, $attrs) {

		$('.button').on('click', function(e){
			$('.button').removeClass('active');
			$(e.target).addClass('active');
		});

	}

	return {
		link: link,
		scope: true,
		restrict: 'A'
	};

};

export default {
	name: 'buttons',
	fn: buttons
};