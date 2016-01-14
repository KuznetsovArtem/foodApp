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

        //no exist key
        $rootScope.getMessage = localServe.getMessage('her');
        console.log($rootScope.getMessage); // in console we almost translate this :-)

        //exist key
        $rootScope.getMessage = localServe.getMessage('testTitle');
        console.log($rootScope.getMessage); //in console "food"

        //change language
        $rootScope.setLang = localServe.setLanguage('ru_RU');

        //no exist key
        $rootScope.getMessage = localServe.getMessage('her');
        console.log($rootScope.getMessage); // in console we almost translate this :-)

        //exist key
        $rootScope.getMessage = localServe.getMessage('testTitle');
        console.log($rootScope.getMessage); //in console "еда"
        $rootScope.getMessage = localServe.getMessage('testSecond');
        console.log($rootScope.getMessage); //in console "второе"

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
