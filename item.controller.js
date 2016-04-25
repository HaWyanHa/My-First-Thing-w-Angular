(function () {
	"use strict";

	angular.module('DaShop')
        .controller('ItemController', ItemController);
	

	function ItemController() {
	    this.items = [
	        { name: "Charmander" },
	        { name: "Charmeleon" },
	        { name: "Charizard" },
	    ];
    }

})();