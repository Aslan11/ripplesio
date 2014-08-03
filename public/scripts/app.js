/*	Define Angular App
---------------------------------------------------------------------- */
var app = angular.module('app', ['ngRoute', 'ngResource', 'ngAnimate', 'ngCookies', 'ngSanitize', 'ngTouch']);

app.config(function($httpProvider, $routeProvider, $locationProvider){
	$routeProvider.
		when('/', {
			action: 'home'
		}).
		when('/about', {
			action: 'about'
		}).
		when('/work', {
			action: 'work'
		}).
		when('/services', {
			action: 'services'
		}).
		when('/news', {
			action: 'news'
		}).
		when('/contact', {
			action: 'contact'
		}).
		
		otherwise({ redirectTo: '/' });

	// Remove "#" from the URL (Except for IE < 10)
	if(window.history && window.history.pushState){
		$locationProvider.html5Mode(true);
	}
});
//Responsive Angular directive
app.directive('resize', function($window) {
  return function($scope) {
    $scope.initializeWindowSize = function() {
      $scope.windowHeight = $window.innerHeight;
      $scope.windowWidth = $window.innerWidth;
      return $scope.windowWidth;
    };
    $scope.initializeWindowSize();
    return angular.element($window).bind('load resize', function() {
      var size = $scope.initializeWindowSize();
      if(size <= 760){
	      $scope.browserType = 'mobile';
      }else{
	      $scope.browserType = 'desktop';
      }
      
      return $scope.$apply();
    });
  };
});

/*	Main Controller
---------------------------------------------------------------------- */
app.controller('mainController', function($scope, $rootScope, $location, $route, $routeParams, $timeout, $resource){
	
	//Get Current View From Router
	$scope.$on('$routeChangeSuccess', function(){
		$scope.currentView = $route.current.action;
	});
	
});
/*	Mobile Controller
---------------------------------------------------------------------- */
app.controller('mobileController', function($scope, $rootScope, $location, $route, $routeParams, $timeout, $resource){
	
	//Get Current View From Router
	$scope.$on('$routeChangeSuccess', function(){
		$scope.currentView = $route.current.action;
	});

});