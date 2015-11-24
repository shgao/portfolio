// Create app
var myApp = angular.module('myApp', ['ui.router'])

// Configure app
// Config route provider
.config(function($stateProvider) {
    $stateProvider
	.state('home', {
		url:'/',
		templateUrl: 'templates/home.html',
		controller: 'HomeController',
	})
	// Configure states for "content" and "about"
	.state('about', {
		url:'/about',
		templateUrl: 'templates/about.html',
		controller: 'AboutController',
	})

	.state('content', {
		url:'/content',
		templateUrl: 'templates/content.html',
		controller: 'ContentController',
	})
})

.controller('HomeController', function($scope){})
.controller('AboutController', function($scope){})

// Content controller: define $scope.items as the json data
.controller('ContentController', function($scope, $http){
	$http.get('data/data.json').success(function(response) {
		$scope.items = response;
	})
})
