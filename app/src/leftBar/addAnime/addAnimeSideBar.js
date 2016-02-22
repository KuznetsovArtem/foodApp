'use strict';

angular
  .module('foodApp')
  .directive('addAnimeSideBar', [function() {
    return {
      scope: {},
      require: ['^nav'],
      controller: function($scope, $element) {

        var sideBarAnime = 'leftBarAnime';
        $element.addClass(sideBarAnime);
      
      },
      link: function(scope, element, attrs, controllers) {
        scope.navCtrl = controllers[0];
      },
    }
  }]);
