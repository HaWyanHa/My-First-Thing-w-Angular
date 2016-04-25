(function () {
	"use strict";

	angular.module('DaShop', ['ui.router']).config(shopConfig);

	shopConfig.$inject = ['$stateProvider', '$urlRouterProvider']

	function shopConfig($stateProvider, $urlRouterProvider){

		 $urlRouterProvider.otherwise('/');

		 $stateProvider
		 	.state("categories", {
		 		url:"/categories",
		 		templateUrl: "categories.html",
		 		controller: "CategoryController",
		 		controllerAs: "category"
		 	})
		 	 .state('categories.items', {
                url: '/name',
                templateUrl: 'category.items.html',
                controller: 'ItemController',
                controllerAs: 'item'
            })
		 	.state("categories.items.details", {
		 		url:'/detail',
		 		templateUrl: "items.html"
		 		

		 	});
	}

	
})();