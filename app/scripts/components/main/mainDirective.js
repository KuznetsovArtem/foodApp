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
