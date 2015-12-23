angular
  .module('foodMain', [])
.directive('main', [function () {
  return{

    templateUrl: 'main.html',
    controllerAs: 'vm',
    controller: function () {
      var vm = this;
      vm.toggle = true;

      vm.not2use = function () {
        $rootScope.not2use = !$rootScope.not2use;
      };
      //4 btn mb
      //vm.goToggle = function () {
      //  vm.toggle = !vm.toggle;
      //
      //  //var data  = { y: true };
      //  //$scope.$broadcast('goToggle', vm.toggle);
      //
      //}
    }


  }
}]);
