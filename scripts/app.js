(function(){
	var app = angular.module('Todo', []);
	app.controller('TodoCtrl', function($scope){
		$scope.message = 'Angular is pretty cool.';		
		$scope.todos = [
			'Learn Sketch',
			'Look at Dribble and feel inferior',
			'Acutally learn how to use the Pen tool'
		];
	});
})();