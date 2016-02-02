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
        // 3rd party
        'onsen',
        'ngAnimate',
        'ngCookies',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        //local
        'foodApp.modules.common.services.localization',
        'foodApp.modules.common.services.localCache'
    ])

  // TODO: move routing to routing.js in /
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'src/startPage/startPage.html'
            })
            .when('/mainPage', {
                templateUrl: 'src/mainPage/mainPage.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])

    .config([
        'localizationConfigProvider',
        'localCacheConfigProvider',
        function(
            localizationConfigProvider,
            localCacheConfigProvider) {

        // set default language;
        localizationConfigProvider.init({
           lang: 'en'
        });

        localCacheConfigProvider.init({
           prefix: 'foodApp'
        });
    }])

    .run(['$rootScope', 'localizationService',
        function ($rootScope, localizationService) {
            // override def lang with user's lang;
            $rootScope.t = localizationService.getMessage;
        }]);

