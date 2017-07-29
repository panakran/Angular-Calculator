var app = angular.module('calculator', ['ngMaterial'])
.directive('calculator', function () {
	return {
		restrict: 'A',
		templateUrl: '/calculator.html',
		controller: 'CalculatorCtrl',
		scope: true
	};
})
.controller('CalculatorCtrl', ['$scope', '$parse', function ($scope, $parse) {
	$scope.result = "";
	$scope.calc = "";
	$scope.chars = 
	[
	{col:['7','8','9','*']},
	{col:['4','5','6','/']},
	{col:['1','2','3','-']},
	{col:['0',',','C','+']}];

	$scope.pressed = function(char){
		if ($scope.calc.endsWith("+") || $scope.calc.endsWith("-") || $scope.calc.endsWith("/") || $scope.calc.endsWith("*")){
			if (char >="0" && char <="9"){
				$scope.calc = $scope.calc+char;
			}
		}
		else{
			$scope.calc = $scope.calc+char;
		}
	};

	$scope.$watch('calc', function(newValue, oldValue) {
		console.log("new",newValue);
		console.log("old",oldValue);
	});
}]);