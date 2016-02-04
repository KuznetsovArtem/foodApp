/**
 * Created by 441N143G on 19.01.16.
 */
'use strict';

angular
    .module('foodApp')
    .directive('leftBar', [function () {
        return {
            templateUrl: '/src/leftBar/leftBar.html',
            scope: {
                config: '=',
                isOpen: '=',
                isBack: '='
            },
            controller: function ($scope) {
                if (!$scope.config) {
                    $scope.config = {
                        //this will be list with animates, u'll setUp what u whant in 'anime'
                        animation: 'slide',
                        style: {'width': '40vw'}
                    };
                }
            }
        }
    }]);
