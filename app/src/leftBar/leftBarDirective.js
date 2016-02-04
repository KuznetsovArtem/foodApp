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
                slider: '='
            },
            controller: function ($scope) {
                if (!$scope.config) {
                    $scope.config = {
                        //this will be list with animates, u'll setUp what u whant in 'anime'
                        animation: 'slide',
                        style: {'width': '40vw'}
                    };
                }
                $scope.isBack = false;
                $scope.toggle = function () {
                    $scope.isOpen = !$scope.isOpen;
                    if ($scope.slider === $scope.config.animation.in) {
                        $scope.slider = $scope.config.animation.out;
                        $scope.isBack = false;
                    } else {
                        $scope.slider = $scope.config.animation.in;
                        $scope.isBack = true;
                    }
                }
            }
        }
    }]);
