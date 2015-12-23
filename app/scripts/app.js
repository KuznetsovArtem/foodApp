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
    'ui.router',
    'templatesCache',
    'foodMain',
    'sidebar',
    'plusbar',
    'mainbar'
  ])

  .run(['$rootScope', '$cookies',function ($rootScope, $cookies) {
    $rootScope.current_user = $cookies.get('username') || null;
    $rootScope.authenticated = $rootScope.current_user ? true : false;
    $rootScope.access_token = $cookies.get('access_token') || null;

    $rootScope.not2use = false;

  }])

  .config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("main");

    $stateProvider
      .state('main', {
        url: "/",
        template: '<div main></div>'
      })

  }]);



  //.factory('foodService', function ($http) {
  //  return {
  //
  //    getAllEat: function () {
  //      return $http.get('https://eatthisplz.herokuapp.com/api/food').catch(function (e) {
  //        console.log(e);
  //      });
  //    }
  //  };
  //})
  //
  //.directive('foodBg', function ($rootScope) {
  //  return {
  //
  //    templateUrl: 'foodBg.html',
  //    controllerAs: 'bgvm',
  //    controller: function () {
  //      var vm = this;
  //      vm.toggle = true;
  //
  //      vm.not2use = function () {
  //        $rootScope.not2use = !$rootScope.not2use;
  //      };
  //      //4 btn mb
  //      //vm.goToggle = function () {
  //      //  vm.toggle = !vm.toggle;
  //      //
  //      //  //var data  = { y: true };
  //      //  //$scope.$broadcast('goToggle', vm.toggle);
  //      //
  //      //}
  //    }
  //  }
  //})
  //
  //.directive('foodMain', function (foodService, $window) {
  //  return {
  //
  //    scope: {},
  //
  //    bindToController: {
  //      goToggle: '='
  //    },
  //
  //    templateUrl: 'foodMain.html',
  //    controllerAs: 'eatvm',
  //
  //    controller: function () {
  //
  //      var vm = this;
  //      vm.nyama = null;
  //      vm.perfectNyama = null;
  //      vm.goToggle = true;
  //
  //      //$scope.$on('goToggle', function(ev, data){
  //      //  vm.toggle = data;
  //      //});
  //
  //      vm.getEat = function () {
  //        return foodService.getAllEat().then(function (res) {
  //          vm.nyama = res.data;
  //          vm.perfectNyama = res.data[Math.floor(Math.random() * (res.data.length))];
  //
  //        }).catch(function (e) {
  //          console.log(e);
  //        })
  //      };
  //
  //      vm.googleOrder = function () {
  //        $window.location.href = 'https://www.google.com.ua/#q=заказать+' + vm.perfectNyama.name;
  //        console.log('order');
  //      };
  //
  //      vm.googleCook = function () {
  //        $window.location.href = 'https://www.google.com.ua/#q=приготовить+' + vm.perfectNyama.name;
  //        console.log('cook');
  //
  //      };
  //    }
  //
  //  }
  //
  //})


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
