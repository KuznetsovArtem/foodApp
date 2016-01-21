/**
 * Created by 441N143G on 17.01.16.
 */
'use strict';

angular

    .module('foodApp')

    .directive('foodDescription', [function () {
        return {
            templateUrl: '/src/foodDescription/foodDescription.html',
            controller: function ($scope, $element, $attrs) {

                var symbolNumberConf = 180; //TODO make config

                $scope.descriptionContainer = 'pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood  pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood'
                $scope.descriptionVendor = '';
                $scope.openDescription = null;
                $scope.readMore = 'Read more';

                var makeDescription = function (symbolNumber) {

                    if ($scope.descriptionContainer) {
                        $scope.descriptionVendor = $scope.descriptionContainer.split('').slice(0, symbolNumber).join('').split(' ').slice(0, -1).join(' ') + '...';
                    } else {
                        //TODO localization msg or remove description block
                        $scope.descriptionVendor = ':-)'
                    }
                };

                makeDescription(symbolNumberConf);

                $scope.descriptionToggle = function () {

                    if ($scope.openDescription === 'openDescription') {

                        $scope.openDescription = null;
                        $scope.readMore = 'Read more';
                        makeDescription(symbolNumberConf);

                    } else {

                        $scope.descriptionVendor = $scope.descriptionContainer;
                        $scope.openDescription = 'openDescription';
                        $scope.readMore = 'Read less';

                    }
                };
            }
        }
    }]);
