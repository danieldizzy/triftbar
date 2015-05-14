'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',    
    'ngResource',
    'ngRoute',    
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://triftbar.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'ItemController'     
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'ItemController'
      })
      .when('/edit/:itemId', {
        templateUrl: 'views/edit.html',
        controller: 'ItemController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
