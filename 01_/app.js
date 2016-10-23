var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope){

	$scope.blackEyedPeas = {
		name: "Black Eyed Peas",
		servingSize: "172g",
		calories: "200",
		fat: "1g",
		cholesterol: "0mg",
		carbohydrate: "36g",
		protein: "13g"
	};

	$scope.water = {
		name: "Water",
		servingSize: "1 liter",
		calories: "0",
		fat: "0g",
		cholesterol: "0mg",
		carbohydrate: "0g",
		protein: "0g"
	};

	$scope.updateCalories = function(foodName, calories){
		switch(foodName){
			case "Black Eyed Peas":
				$scope.blackEyedPeas.calories = calories;
				break;
			case "Wwater":
				$scope.water.calories = calories;
				break;
		}
	};

	$scope.canUpdate = function(){
		window.alert("That's not correct so ignoring update");
	}

});

myApp.directive('nutritionsFacts', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/nutritionsFacts.html',
		scope: {
			food: "=food",
			update: "&update"
		}
	}
});