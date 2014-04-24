var kickStartr = angular.module('kickStartr', ['ngRoute']);

//Router Config
kickStartr.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/home', {
				templateUrl: 'views/home.html',
				controller: 'homeCtrl'
			}).
			when('/documentation', {
				templateUrl: 'views/documentation.html',
				controller: 'documentationCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]
);

kickStartr.controller('homeCtrl', ['$scope', function($scope){
	$scope.message = "joseph nwachukwu";
}]);