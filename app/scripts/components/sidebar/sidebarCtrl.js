angular.
  module('sidebarCtrl', [])

  .controller('sidebarCtrl', [function () {

    var vm = this;

    vm.isSelectedBuy = 'sidebar-selected';
    vm.isSelectedOrder = null;

    vm.sidebarOpen = function () {

      vm.sidebarToggle = !vm.sidebarToggle;
      vm.backgroundClasses = vm.sidebarToggle ? 'col-lg-10 col-md-10 col-sm-10 col-xs-10' : 'col-lg-12 col-md-12 col-sm-12 col-xs-12';

    };


    vm.buyOrderToggle = function () {

      vm.buyOrder = !vm.buyOrder;

      vm.isSelectedToggle();

    };

    vm.buy = function () {

      vm.buyOrder = true;

      vm.isSelectedToggle();

    };

    vm.Order = function () {

      vm.buyOrder = false;

      vm.isSelectedToggle();

    };

    vm.isSelectedToggle = function () {

      if (vm.isSelectedBuy) {
        vm.isSelectedBuy = null;
        vm.isSelectedOrder = 'sidebar-selected';
      } else{
        vm.isSelectedBuy = 'sidebar-selected';
        vm.isSelectedOrder = null;
      }

    }


  }]);
