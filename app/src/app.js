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
    .module('foodApp', [ // TODO: SEE 'TODO: (1)' in gulpfile;
        // 3rd party
        //'onsen',
        //'ngAnimate',
        'ngCookies',
        //'ngRoute',
        //'ngSanitize',
        //'ngTouch',
        // local
        'foodApp.modules.common.services.localization',
        'foodApp.modules.common.services.cache'
    ])
    // TODO: uncomment after 'TODO (1)';
    //.config(['$routeProvider', function($routeProvider) {
    //  $routeProvider
    //    .when('/', {
    //      templateUrl: 'views/about.html'
    //    })
    //    .when('/about', {
    //      templateUrl: 'views/about.html'
    //    })
    //    .otherwise({
    //      redirectTo: '/'
    //    });
    //}])
    .config(['localizationConfigProvider', function (localizationConfigProvider) {
        // set default language;
        localizationConfigProvider.init({
            lang: 'en'
        })
    }])
    .run(['$rootScope', 'localizationService', 'userSessionStorage',
        function ($rootScope, localizationService, storage) {
            // override def lang with user's lang;
            localizationService.setLang(storage.getUser().lang);
            $rootScope.t = localizationService.getMessage;

            //TODO remove this after create leftBar directive
            $rootScope.leftBar = false;
            $rootScope.leftBarOpen = function () {
            $rootScope.leftBar = !$rootScope.leftBar;
                console.log('leftBar toggle');
            }

        }]);
