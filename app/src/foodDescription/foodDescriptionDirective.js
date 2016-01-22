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

                $scope.descriptionContainer = '1pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood  pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood'
                $scope.descriptionVendor = '';
                $scope.openDescription = false;

                var makeDescription = function (symbolNumber) {

                    if ($scope.descriptionContainer) {
                        $scope.descriptionVendor = $scope.descriptionContainer.slice(0, symbolNumber).split(' ').slice(0, -1).join(' ') + '...';
                    } else {
                        //TODO localization msg or remove description block
                        $scope.descriptionVendor = ':-)'
                    }
                }(symbolNumberConf);


            }
        }
    }]);
