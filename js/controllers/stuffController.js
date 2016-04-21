(function() {
	"use strict";

	angular
		.module("shopular")
		.controller("StuffController", StuffController);

	StuffController.$inject = ["Inventory"];

	function StuffController(Inventory) { 

		this.all = Inventory.data;

		console.log(this.all);

		this.tax = .0575;
	
		this.newItem = {
			name: "",
			price: "",
			quantity:"",
			color:"",
			discount: ""
		};
		
		this.save = function saveItem(form) {
			if (form.$valid) {
				this.all.push(this.newItem);
				this.newItem = {};
				form.$setPristine();
				form.$setUntouched();
			} else {
				console.log("hello")
			}
		}

		//plus minus button
		this.plus = function addOne(foo){
			foo.quantity = foo.quantity + 1;
		}

		this.minus = function minusOne(foo){
			if (foo.quantity > 0)
			foo.quantity = foo.quantity - 1;
		}
	}
	
})();
