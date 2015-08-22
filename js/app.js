var app = angular.module('myApp', []);
app.controller('calc', function($scope){
	$scope.userInput = 10;
	
	$scope.answer = function(arg){
		return arg * 2;
	};
	
	$scope.name = 'Cameron';
});

app.controller('StringReverse', function($scope){
	
	$scope.strReverse = function(str){
			if(str !== undefined){
				return str.split('').reverse().join('');
			}
	};
});