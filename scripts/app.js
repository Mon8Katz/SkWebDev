(function(){
	var app = angular.module('gemStore', []);
	app.controller('StoreController', function(){
		this.products = gems;
	
	});
	
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.92,
			description: 'This is a test description for Dodecahedron.',
			canPurchase: true,
			soldOut: false,
		},
		{
			name: 'Pentagonal Gem',
			price: 7.92,
			description: 'This is a test description for Pentagonal Gem.',
			canPurchase: true,
			soldOut: false,
		},
	];
})();