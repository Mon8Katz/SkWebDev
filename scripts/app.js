(function(){
	var app = angular.module('gemStore', []);
	app.controller('StoreController', function(){
		this.products = gems;			
	});
	
	app.controller('TabController', function(){
		this.tab = 1;
		this.setTab = function(setTab){
			this.tab = setTab;
		};
		this.isSet = function(checkTab){
			return this.tab === checkTab; 
		};
	
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