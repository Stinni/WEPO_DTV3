"use strict";

angular.module("testApp").controller("LoginController",
function LoginController($scope, LoginResource, $location) {

	$scope.onLogin = function onLogin() {
		if (LoginResource.isValidUserAndPass($scope.username, $scope.password)) {
			$location.path("/about");
		} else {
			$scope.errorMessage = "Login failed!";
		}
	};
});