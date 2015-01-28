var app = angular.module('myDirectives', []);

	app.directive('pending', function($scope){
		return {
			restrict: 'AE',
			scope: {
				request: '&'
			},
			link: function(scope, elem, attrs){
				scope.submit = 'Pending...'
			},
			
		}
		console.log(scope, elem, attrs);
	});