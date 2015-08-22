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