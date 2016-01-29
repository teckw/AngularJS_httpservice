var app = angular.module('mainApp', []);

app.controller('cars', function($scope, $http){
	$http.get('http://localhost:8000/database.json')
	.success(function(response){
		$scope.cars = response.stuff;
	});
});