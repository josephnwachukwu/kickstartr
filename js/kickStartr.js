angular.module('kickStartr.components', []).directive('phoneNumber', function(){
	return {
		scope: false,
		transclude: true,
		restrict: "EA",
		template: '<div class="form-group"><label class="control-label">Phone Number</label><input class="form-control" data-ng-model="phoneNumber" placeholder="ex:(123) 456 - 7890"></div>',
		link: function(scope, elem, attrs) {

		}
	};
})

.directive('zipCode', function() {
	return {
		scope: false,
		transclude: true,
		restrict: "E",
		template: '',
		link: function(scope, elem, attrs) {

		}
	};
})

.directive('state', function() {
	return {
		scope: false,
		transclude: true,
		restrict: "E",
		template: '',
		link: function(scope, elem, attrs) {

		}
	};
})

.directive('country', function() {
	return {
		scope: false,
		transclude: true,
		restrict: "E",
		template: '',
		link: function(scope, elem, attrs) {

		}
	};
})

.directive('password', function() {
	return {
		scope: false,
		transclude: true,
		restrict: "E",
		template: '',
		link: function(scope, elem, attrs) {

		}
	};
})

.directive('email', function() {
	return {
		scope: false,
		transclude: true,
		restrict: "E",
		template: '',
		link: function(scope, elem, attrs) {

		}
	};
});
/*angular.module('kickStartr').run(['$templateCache', function(){
	$templateCache.put('');
	$templateCache.put();
	$templateCache.put();
	$templateCache.put();
	$templateCache.put();
}]);*/