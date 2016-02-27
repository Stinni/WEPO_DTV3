"use strict";

angular.module("testApp", ["ngRoute"])
.config(function($routeProvider) {
	$routeProvider.when("/", {
		controller: "LoginController",
		templateUrl: "login/login.html"
	}).when("/about", {
		templateUrl: "about/about.html"
	});
});