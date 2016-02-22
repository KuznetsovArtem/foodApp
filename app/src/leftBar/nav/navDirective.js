/**
 * Created by 441N143G on 19.01.16.
 */
'use strict';

angular
  .module('foodApp')
  .directive('nav', [function() {
    return {
      require: ['^nav'],
      controller: function() {
        this.isOpenSideBar = false;
      }
    }
  }]);
