(function () {
	"use strict";

	angular.module('DaShop')
        .controller('CategoryController', CategoryController);
	

	function CategoryController() {
	    this.categories = [
	        { name: "fire" },
	        { name: "water" },
	        { name: "grass" },
	    ];
    }
})();