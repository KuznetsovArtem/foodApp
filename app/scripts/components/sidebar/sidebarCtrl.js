angular.
  module('sidebarCtrl', [])

  .controller('sidebarCtrl', [function () {

    var vm = this;

    vm.sidebarOpen = function () {

      vm.sidebarToggle = !vm.sidebarToggle;
      vm.backgroundClasses = vm.sidebarToggle ? 'col-lg-10 col-md-10 col-sm-10 col-xs-10' : 'col-lg-12 col-md-12 col-sm-12 col-xs-12';

    };

  }]);
