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
