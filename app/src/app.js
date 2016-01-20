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
    'foodApp.modules.common.services.cache'
  ])

  .config(['$routeProvider', 'localizationConfigProvider', function($routeProvider, localizationConfigProvider) {

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

      // set default language;
    localizationConfigProvider.init({
      lang: 'en'
    })

  }])
  .run(['$rootScope', 'localizationService', 'userSessionStorage',
    function($rootScope, localizationService, storage) {
      // override def lang with user's lang;
      localizationService.setLang(storage.getUser().lang);
      $rootScope.t = localizationService.getMessage;
  }]);
