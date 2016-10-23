var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope){
	$scope.name1 = "John Doe";
});

myApp.directive('hotArea', function(){
	return function(scope, element, atts){
			element.bind("mouseover", function(){
				element.addClass("areaOn");
				console.log("mouseover");
			});

			element.bind("mouseout", function(){
				element.removeClass("areaOn");
				console.log("mouseout");
			});
		}
});