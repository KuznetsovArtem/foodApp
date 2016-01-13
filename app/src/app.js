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
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'onsen'
    ])

    .run(['$rootScope', 'localizationService', function ($rootScope, localServe) {

//unit test)))
        $rootScope.words = localServe.getWords('ru_RU');
        console.log($rootScope.words.testTitle);

        $rootScope.words = localServe.getWords('en_US');
        console.log($rootScope.words.testTitle);

        $rootScope.words = localServe.getWords('ua_UA');
        console.log($rootScope.words.testTitle);

        $rootScope.words = localServe.getWords('tarashkeviza');
        if ($rootScope.words) {

            console.log($rootScope.words.testTitle);

        }

    }]);

//.config(function ($routeProvider) {
//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/about.html'
//      })
//      .when('/about', {
//        templateUrl: 'views/about.html'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
//});
