var kickStartr = angular.module('kickStartr', ['ngRoute','kickStartr.components']);

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
			when('/components', {
				templateUrl: 'views/components.html',
				controller: 'componentsCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]
);

kickStartr.controller('homeCtrl', ['$scope', function($scope){
	$scope.message = "joseph nwachukwu";
}]);

kickStartr.controller('documentationCtrl', ['$scope', function($scope){
	$scope.message = "joseph nwachukwu";
}]);
kickStartr.controller('componentsCtrl', ['$scope', function($scope){
	$scope.message = "joseph nwachukwu";
}]);

kickStartr.directive('scroll-spy', function(){
	return {
		link: function(scope, elem,attrs) {
			$(elem).scrollspy();
		}
	};
});

kickStartr.directive('affix', function(){
	return {
		link: function(scope, elem,attrs) {
			$(elem).affix();
		}
	};
});
