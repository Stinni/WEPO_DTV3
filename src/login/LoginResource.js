"use strict";

angular.module("testApp").factory("LoginResource",
function LoginResource() {
	return {
		isValidUserAndPass: function isValidUserAndPass(user, pass) {
			// Our current high-security authentication scheme:
			return user === pass;
		}
	};
});
