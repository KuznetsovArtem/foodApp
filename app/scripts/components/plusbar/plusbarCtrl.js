angular.
  module('plusbarCtrl', [])

  .controller('plusbarCtrl', [function () {

    var vm = this;

    vm.plusbarOpen = function () {
      vm.plusbarToggle = !vm.plusbarToggle;
    };

  }]);
