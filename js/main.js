var kickStartr = angular.module('kickStartr', ['ngRoute']);

//Router Config
kickStartr.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/home', {
				templateUrl: 'views/home.html',
				controller: 'homeCtrl'
			}).
			when('/sites', {
				templateUrl: 'views/sites.html',
				controller: 'sitesCtrl'
			}).
			when('/dossier', {
				templateUrl: 'views/dossier.html',
				controller: 'dossierCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]
);