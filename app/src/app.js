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

    // TODO: Artem: move to conf file;
    .constant('ROUTES', {
        DEFAULT: '/',
        FOOD_PAGE: '/food'
    })
  // TODO: move routing to routing.js in /
    .config(['$routeProvider', '$locationProvider', 'ROUTES', function ($routeProvider, $locationProvider, ROUTES) {

        $locationProvider.html5Mode(true);

        $routeProvider
            .when(ROUTES.DEFAULT, {
                templateUrl: 'src/startPage/startPage.html'
            })
            .when(ROUTES.FOOD_PAGE, {
                templateUrl: 'src/mainPage/mainPage.html'
            })// TODO:
            .when('/filters', {
                templateUrl: 'src/filtersPage/filtersPage.html'
            })
            .when('/setting', {
                templateUrl: 'src/settingPage/settingPage.html'
            })
            .when('/history', {
                templateUrl: 'src/historyPage/historyPage.html'
            })
            .otherwise({
                redirectTo: ROUTES.DEFAULT
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

