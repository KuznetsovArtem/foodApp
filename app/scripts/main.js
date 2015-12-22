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
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router'
  ])
  .run(function ($rootScope, $cookies) {

    $rootScope.current_user = $cookies.get('username') || null;
    $rootScope.authenticated = $rootScope.current_user ? true : false;
    $rootScope.access_token = $cookies.get('access_token') || null;

    $rootScope.not2use = false;


  })

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("main");

    $stateProvider
      .state('main', {
        url: "/",
        template: ""
      })
  })

  .factory('foodService', function ($http) {
    return {

      getAllEat: function () {
        return $http.get('https://eatthisplz.herokuapp.com/api/food').catch(function (e) {
          console.log(e);
        });
      }
    };
  })

  .directive('foodBg', function ($rootScope) {
    return {

      templateUrl: 'foodBg.html',
      controllerAs: 'bgvm',
      controller: function () {
        var vm = this;
        vm.toggle = true;

        vm.not2use = function () {
          $rootScope.not2use = !$rootScope.not2use;
        };
        //4 btn mb
        //vm.goToggle = function () {
        //  vm.toggle = !vm.toggle;
        //
        //  //var data  = { y: true };
        //  //$scope.$broadcast('goToggle', vm.toggle);
        //
        //}
      }
    }
  })

  .directive('foodMain', function (foodService, $window) {
    return {

      scope: {},

      bindToController: {
        goToggle: '='
      },

      templateUrl: 'foodMain.html',
      controllerAs: 'eatvm',

      controller: function () {

        var vm = this;
        vm.nyama = null;
        vm.perfectNyama = null;
        vm.goToggle = true;

        //$scope.$on('goToggle', function(ev, data){
        //  vm.toggle = data;
        //});

        vm.getEat = function () {
          return foodService.getAllEat().then(function (res) {
            vm.nyama = res.data;
            vm.perfectNyama = res.data[Math.floor(Math.random() * (res.data.length))];

          }).catch(function (e) {
            console.log(e);
          })
        };

        vm.googleOrder = function () {
          $window.location.href = 'https://www.google.com.ua/#q=заказать+' + vm.perfectNyama.name;
          console.log('order');
        };

        vm.googleCook = function () {
          $window.location.href = 'https://www.google.com.ua/#q=приготовить+' + vm.perfectNyama.name;
          console.log('cook');

        };
      }

    }

  })


//  .run(function ($templateCache) {
//    $templateCache.put('foodBg.html', `<div class="container-fluid container-main">
//
//
//  <div class="row main">
//
//    <div class="btn btn-lg" ng-click="bgvm.not2use()">
//      <span class="glyphicon glyphicon-align-justify"></span>
//    </div>
//
//    <div  class="pull-right btn btn-lg">
//      <span class="glyphicon glyphicon-info-sign"></span>
//    </div>
//<div class="checkbox" >
//      <label>
//        <input type="checkbox" ng-model="bgvm.toggle">Order/Cook
//      </label>
//    </div>
//  </div>
//
//  <food-main go-toggle="bgvm.toggle"></food-main>
//
//</div>`);
//
//    $templateCache.put('foodMain.html', `
//
//    <div class="row btn-group navbar-fixed-bottom footer">
//
//      <div class="col-md-6 col-sm-6 col-xs-6 btn btn-primary btn-footer">Course: {{eatvm.perfectNyama.course}}
//      <span class="caret"></span>
//      </div>
//      <div class="col-md-6 col-sm-6 col-xs-6 btn btn-primary btn-footer">Name: {{eatvm.perfectNyama.name}}
//      <span class="caret"></span>
//      </div>
//      <div class="col-md-12 col-sm-12 col-xs-12 btn btn-primary btn-footer">Country: {{eatvm.perfectNyama.country}}
//      <span class="caret"></span>
//      </div>
//      <div class="col-md-6 col-sm-6 col-xs-6 btn btn-primary btn-footer-main" ng-click="eatvm.getEat()">Random</div>
//      <div class="col-md-6 col-sm-6 col-xs-6 btn btn-primary btn-footer-main" ng-if="eatvm.goToggle" ng-click="eatvm.googleOrder()">Go Order</div>
//      <div class="col-md-6 col-sm-6 col-xs-6 btn btn-primary btn-footer-main" ng-if="!eatvm.goToggle" ng-click="eatvm.googleCook()">Go Cook</div>
//
//      </div>
//
//
//      `);
//
//  });

angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("404.html","<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Page Not Found :(</title>\n    <style>\n      ::-moz-selection {\n        background: #b3d4fc;\n        text-shadow: none;\n      }\n\n      ::selection {\n        background: #b3d4fc;\n        text-shadow: none;\n      }\n\n      html {\n        padding: 30px 10px;\n        font-size: 20px;\n        line-height: 1.4;\n        color: #737373;\n        background: #f0f0f0;\n        -webkit-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;\n      }\n\n      html,\n      input {\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n      }\n\n      body {\n        max-width: 500px;\n        padding: 30px 20px 50px;\n        border: 1px solid #b3b3b3;\n        border-radius: 4px;\n        margin: 0 auto;\n        box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n        background: #fcfcfc;\n      }\n\n      h1 {\n        margin: 0 10px;\n        font-size: 50px;\n        text-align: center;\n      }\n\n      h1 span {\n        color: #bbb;\n      }\n\n      h3 {\n        margin: 1.5em 0 0.5em;\n      }\n\n      p {\n        margin: 1em 0;\n      }\n\n      ul {\n        padding: 0 0 0 40px;\n        margin: 1em 0;\n      }\n\n      .container {\n        max-width: 380px;\n        margin: 0 auto;\n      }\n\n      /* google search */\n\n      #goog-fixurl ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      #goog-fixurl form {\n        margin: 0;\n      }\n\n      #goog-wm-qt,\n      #goog-wm-sb {\n        border: 1px solid #bbb;\n        font-size: 16px;\n        line-height: normal;\n        vertical-align: top;\n        color: #444;\n        border-radius: 2px;\n      }\n\n      #goog-wm-qt {\n        width: 220px;\n        height: 20px;\n        padding: 5px;\n        margin: 5px 10px 0 0;\n        box-shadow: inset 0 1px 1px #ccc;\n      }\n\n      #goog-wm-sb {\n        display: inline-block;\n        height: 32px;\n        padding: 0 10px;\n        margin: 5px 0 0;\n        white-space: nowrap;\n        cursor: pointer;\n        background-color: #f5f5f5;\n        background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n\n      #goog-wm-sb:hover,\n      #goog-wm-sb:focus {\n        border-color: #aaa;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n        background-color: #f8f8f8;\n      }\n\n      #goog-wm-qt:hover,\n      #goog-wm-qt:focus {\n        border-color: #105cb6;\n        outline: 0;\n        color: #222;\n      }\n\n      input::-moz-focus-inner {\n        padding: 0;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"container\">\n      <h1>Not found <span>:(</span></h1>\n      <p>Sorry, but the page you were trying to view does not exist.</p>\n      <p>It looks like this was the result of either:</p>\n      <ul>\n        <li>a mistyped address</li>\n        <li>an out-of-date link</li>\n      </ul>\n      <script>\n        var GOOG_FIXURL_LANG = (navigator.language || \'\').slice(0,2),GOOG_FIXURL_SITE = location.host;\n      </script>\n      <script src=\"//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js\"></script>\n    </div>\n  </body>\n</html>\n");}]);