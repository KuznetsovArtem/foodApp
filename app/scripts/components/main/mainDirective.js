angular
  .module('foodMain', ['mainCtrl'])
  .directive('main', [function () {
    return {
      scope: {

      },
      bindToController:{
      },
      templateUrl: 'main.html',
      controllerAs: 'vm',
      controller: 'mainCtrl'

    }
  }]);
