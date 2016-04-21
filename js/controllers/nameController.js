(function () {
	"use strict";

	angular
		.module("shopular")
		.controller("NameController", NameController);

	function NameController(){
		this.name = "ryan";
		this.time = new Date();
	}

})();