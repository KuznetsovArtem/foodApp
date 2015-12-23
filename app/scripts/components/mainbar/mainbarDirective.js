angular
  .module('mainbar', ['mainbarCtrl'])
  .directive('mainbar', [function () {
    return {
      scope: {},
      bindToController:{
buyOrder: '='

      },
      templateUrl: 'mainbar.html',
      controllerAs: 'vm',
      controller: 'mainbarCtrl'

    }
  }]);
