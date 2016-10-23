# var myApp = angular.module('myApp', []);


app.directive('ngComment', function(){
	return {
		restrict: 'E'
		scope:{
			comment: '='
		},
		templateUrl: 'partials/comment.html'
	}
})