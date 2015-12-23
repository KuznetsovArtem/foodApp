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
