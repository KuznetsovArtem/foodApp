/**
 * Created by 441N143G on 19.01.16.
 */
'use strict';

angular

    .module('foodApp')
    .directive('leftBar', [function () {
        return {
            templateUrl: '/src/leftBar/leftBar.html',
            controller: function ($scope) {
//TODO make access to config
                var config = {
                    anime: {
                        first: 'slide'
                    },
                    style: {'width': '500px'}
                };

                $scope.isOpen = false;
                $scope.class = config.anime.first;
                $scope.style = config.style;

            }
        }
    }]);
