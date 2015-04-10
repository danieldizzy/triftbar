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
      .when('/', {
        templateUrl: 'views/browse.html'        
      })
      .when('/', {
        templateUrl: 'views/main.html'        
      })
      .otherwise({
        redirectTo: '/'
      });
  });
