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
        templateUrl: 'views/browse.html'        
      })
      .when('/post', {
        templateUrl: 'views/post.html'        
      })
      .when('/edit', {
        templateUrl: 'views/edit.html'        
      })
      .otherwise({
        redirectTo: '/'
      });
  });
