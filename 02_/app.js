var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope){
	$scope.name1 = "John Doe";
});

myApp.directive('someDirective', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/someDirective.html',
		scope: {
			someName: "@"
		}
	}
});