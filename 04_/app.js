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
	}; 
	
	$scope.listeFood = [$scope.blackEyedPeas, $scope.water];

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

myApp.directive('ngTest', function(){
	return {
		template: '<h3>Salut : <strong>{{username}}</strong></h3>',
		restrict: 'A',
		transclude: true,
		scope: {
			username: '='
		}
	}
});

myApp.directive('ngTabs', function(){
	return {
		templateUrl: 'directive/tabs.html',
		restrict: 'E',
		transclude: true,
		scope: {},
		controller: function($scope){
			$scope.tabs = []

			this.add = function(tab){
				$scope.tabs.push(tab)
			}
		}
	}
});

myApp.directive('ngTab', function(){
	return {
		templateUrl: 'directive/tab.html',
		restrict: 'E',
		transclude: true,
		scope: {
			title: '='
		},
		require: '^ngTabs',
		link: function(scope, element, attrs, tabsCtrl){
			tabsCtrl.add(scope),
			$scope.update = function(title){
				console.log('Update ', title)
				$scope.title = title;
			}
		}
	}
});
