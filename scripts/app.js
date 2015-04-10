'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase'
  ])
  .constant('FURL', 'https://triftbar.firebaseio.com//')  
  .config(function ($routeProvider) {
    $routeProvider    
      .when('/', {
        templateUrl: 'views/main.html'        
      })  
      .when('/post', {
        templateUrl: 'views/browse.html'        
      })

      .when('/edit', {
        templateUrl: 'views/edit.html'        
      })
      .when('/browse', {
        templateUrl: 'views/browse.html'        
      })
      .otherwise({
        redirectTo: '/'
      });
  });
