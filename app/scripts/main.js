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
    'plusbar'
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

angular.
  module('mainCtrl',[])

  .controller('mainCtrl', [function () {
  var vm = this;

  vm.sidebarToggle = false;
  vm.plusbarToggle = false;
  vm.backgroundClasses= 'col-lg-12 col-md-12 col-sm-12 col-xs-12';

  vm.sidebarOpen = function () {

    vm.sidebarToggle = !vm.sidebarToggle;
    vm.backgroundClasses= vm.sidebarToggle ? 'col-lg-10 col-md-10 col-sm-10 col-xs-10' : 'col-lg-12 col-md-12 col-sm-12 col-xs-12';

  };

  vm.plusbarOpen = function () {
    vm.plusbarToggle = !vm.plusbarToggle;
  };
}]);

angular
  .module('foodMain', ['mainCtrl'])
  .directive('main', [function () {
    return {
      scope: {},
      templateUrl: 'main.html',
      controllerAs: 'vm',
      controller: 'mainCtrl'

    }
  }]);

angular.
  module('plusbarCtrl', [])

  .controller('plusbarCtrl', [function () {

    var vm = this;

    vm.plusbarOpen = function () {
      vm.plusbarToggle = !vm.plusbarToggle;
    };

  }]);

angular
  .module('plusbar', ['plusbarCtrl'])
  .directive('plusbar', [function () {
    return {
      scope: {
      },
      bindToController:{
        plusbarToggle:'='

      },
      templateUrl: 'plusbar.html',
      controllerAs: 'vm',
      controller: 'plusbarCtrl'

    }
  }]);

angular.
  module('sidebarCtrl', [])

  .controller('sidebarCtrl', [function () {

    var vm = this;

    vm.sidebarOpen = function () {

      vm.sidebarToggle = !vm.sidebarToggle;
      vm.backgroundClasses = vm.sidebarToggle ? 'col-lg-10 col-md-10 col-sm-10 col-xs-10' : 'col-lg-12 col-md-12 col-sm-12 col-xs-12';

    };

  }]);

angular
  .module('sidebar', ['sidebarCtrl'])
  .directive('sidebar', [function () {
    return {
      scope: {},
      bindToController:{

        sidebarToggle:'=',
        backgroundClasses: '='

      },
      templateUrl: 'sidebar.html',
      controllerAs: 'vm',
      controller: 'sidebarCtrl'

    }
  }]);

angular.module("templatesCache", []).run(["$templateCache", function($templateCache) {$templateCache.put("main.html","<div class=\"container-fluid max-height\">\n  <div class=\"row max-height\">\n    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 max-height sidebar\" ng-if=\"vm.sidebarToggle\">\n\n      <div sidebar sidebar-toggle=\"vm.sidebarToggle\"  background-classes=\"vm.backgroundClasses\" ></div>\n\n    </div>\n\n    <div class=\"max-height\" ng-class=\"vm.backgroundClasses\">\n\n      <div class=\"row max-height\">\n\n        <div class=\"col-md-12 main\">\n          <div class=\"row\">\n            <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1 btn\" ng-click=\"vm.sidebarOpen()\" ng-if=\"!vm.sidebarToggle\">\n              <div class=\"fa fa-bars fa-2x \"></div>\n            </div>\n            <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\" ng-if=\"vm.sidebarToggle\">\n            </div>\n            <div class=\"col-lg-10 col-md-10 col-lg-10 col-md-10 col-sm-10 col-xs-10 text-center\">\n              <div class=\"fa fa-spinner fa-pulse  fa-5x\"></div>\n            </div>\n\n\n            <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn\" ng-if=\"!vm.plusbarToggle\" ng-click=\"vm.plusbarOpen()\">\n                <div class=\"fa fa-plus-circle fa-2x\"></div>\n              </div>\n\n                <div plusbar ng-if=\"vm.plusbarToggle\" plusbar-toggle=\"vm.plusbarToggle\"></div>\n\n            </div>\n\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 eat-name-container\">\n\n\n              <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 eat-name  text-center\">\n                  <div class=\"btn fa fa-lock\"></div>\n                  <span>What</span>\n                  <div class=\"btn fa fa-chevron-circle-down\"></div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 eat-name text-center\">\n                  <div class=\"btn fa fa-lock\"></div>\n                  <span>to</span>\n                  <div class=\"btn fa fa-chevron-circle-down\"></div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 eat-name text-center\">\n                  <div class=\"btn fa fa-lock\"></div>\n                  <span>eat?</span>\n                  <div class=\"btn fa fa-chevron-circle-down\"></div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"col-md-12 footer-btn-container\">\n          <div class=\"row max-height\">\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 btn max-height footer-btn\"><div class=\"fa fa-random fa-5x\"></div></div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 btn max-height footer-btn\"><div class=\"fa fa-shopping-cart fa-5x\"></div>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("plusbar.html","<div class=\"row plus-btn\" >\n<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn\" ng-click=\"vm.plusbarOpen()\">\n  <div class=\"fa fa-times-circle fa-2x\"></div>\n</div>\n<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn\">\n  <div class=\"fa fa-star fa-2x\"></div>\n</div>\n<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn\">\n  <div class=\"fa fa-check-square-o fa-2x\"></div>\n</div>\n<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn\">\n  <div class=\"fa fa-info-circle fa-2x\"></div>\n</div>\n<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn\">\n  <div class=\"fa fa-ban fa-2x\"></div>\n</div>\n</div>\n");
$templateCache.put("sidebar.html","<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn\" ng-click=\"vm.sidebarOpen()\">\n    <div class=\"fa fa-times fa-5x\" ></div>\n  </div>\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn\">\n    <div class=\"fa fa-sign-in fa-5x\"></div>\n  </div>\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn\">\n    <div class=\"fa fa-user  fa-5x\"></div>\n  </div>\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn\">\n    <div class=\"fa fa-question-circle fa-5x\"></div>\n  </div>\n\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 eat-toggle\">\n\n    <div class=\"row max-height\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn toggle-btn\">\n        <div class=\"fa fa-cutlery  fa-4x\"></div>\n      </div>\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn toggle-btn\">\n        <div class=\"fa fa-toggle-on fa-2x fa-rotate-90\"></div>\n      </div>\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 btn toggle-btn\">\n        <div class=\"fa fa-shopping-cart  fa-4x\"></div>\n      </div>\n    </div>\n\n  </div>\n</div>\n");}]);