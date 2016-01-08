'use strict';

/**
 * @ngdoc overview
 * @name foodApp
 * @description
 * # foodApp
 *
 * Main module of the application.
 */
angular
  .module('foodApp', [
    'onsen',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
