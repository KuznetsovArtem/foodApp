/**
 * Created by 441N143G on 17.01.16.
 */
'use strict';

angular

    .module('foodApp')

    .directive('foodDescription', [function () {

        return {

            templateUrl: '/src/foodDescription/foodDescription.html',

            scope: {},

            controller: 'foodDescriptionCtrl',

            controllerAs: 'vm',

            link: function (scope, el, atrrs) {

            }

        }


    }])

    .controller('foodDescriptionCtrl', ['foodService', function (foodServe) {

        var vm = this;
        var symbolNumberConf = 150; //TODO make config

        vm.descriptionContainer = foodServe.getDescription();
        vm.descriptionVendor = '';

        vm.openDescription = null;
        vm.readMore = 'Read more';

        var makeDescription = function (symbolNumber) {

            if (vm.descriptionContainer.length) {

                vm.descriptionVendor = vm.descriptionContainer.split('').slice(0, symbolNumber).join('').split(' ').slice(0, -1).join(' ') + '...';


            } else {

                //TODO localization msg
                vm.descriptionVendor = ':-)'

            }


        };

        makeDescription(symbolNumberConf);


        vm.descriptionToggle = function () {

            if (vm.openDescription === 'openDescription') {

                vm.openDescription = null;
                vm.readMore = 'Read more';
                makeDescription(symbolNumberConf);

            } else {

                vm.descriptionVendor = vm.descriptionContainer;
                vm.openDescription = 'openDescription';
                vm.readMore = 'Read less';

            }

        }

    }]);