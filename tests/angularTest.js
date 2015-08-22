describe('Calc controller:', function(){
	
	var scope, myController;
	
	beforeEach(function(){
		module('myApp');
		
		inject(function($rootScope, $controller){
			
			scope = $rootScope.$new();
			myController = $controller('calc', {
				$scope: scope
			});
			
		});
	});
	
	it('should my name to be Cameron', function(){
		expect(scope.name).toBe('Cameron');
	});
	
	it('Should multiply the value of userInput by two', function(){
		expect(scope.answer(30)).toBe(60);
	});
});

describe('StringReverse Controller', function(){
	
	var scope, myContr;
	
	beforeEach(function(){
		module('myApp');
		
		inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			
			myContr = $controller('StringReverse', {
				$scope: scope
			});
		});
	});
	
	it('should take a string and return it reversed', function(){
		var str = 'This is a string in order';
		var reversedString = 'redro ni gnirts a si sihT'; // Reversed str
		expect(scope.strReverse(str)).toBe(reversedString);
	});
});