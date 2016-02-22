'use strict';

angular
  .module('foodApp')
  .directive('buttonSide', [function() {
    return {
      templateUrl: '/src/leftBar/button/buttonSide.html',
      scope: {

      },
      require: ['^nav'],
      controller: function($scope) {
        $scope.toggle = function() {
          $scope.navCtrl.isOpenSideBar = !$scope.navCtrl.isOpenSideBar;
        }
      },
      link: function(scope, element, attrs, controllers) {
        scope.navCtrl = controllers[0];
      },
    }
  }]);
